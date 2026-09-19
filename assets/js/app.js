/* BPIV Information System — app.js */
(function () {
  "use strict";

  var I = window.BPIV_I18N;
  var D = window.BPIV_DATA;
  var LANG_KEY = "bpiv_lang";
  var currentLang = "en";
  var chartInstances = [];

  function t(key) {
    // dot-path lookup
    var parts = key.split(".");
    var node = I[currentLang];
    for (var i = 0; i < parts.length; i++) {
      if (node == null) return "[" + key + "]";
      node = node[parts[i]];
    }
    return node != null ? node : "[" + key + "]";
  }

  function fmtIDR(v) {
    if (v == null || isNaN(v)) return "—";
    var sign = v < 0 ? "-" : "";
    v = Math.abs(v);
    if (v >= 1e9) return sign + (v / 1e9).toFixed(2) + " bn";
    if (v >= 1e6) return sign + (v / 1e6).toFixed(1) + " m";
    return sign + v.toLocaleString();
  }
  function fmtPct(p) {
    if (p == null) return "—";
    if (p >= 0.01) return (p * 100).toFixed(1).replace(/\.0$/, "") + "%";
    return (p * 100).toFixed(2).replace(/\.?0+$/, "") + "%";
  }

  // ---- routing ----
  function parseRoute() {
    var h = location.hash.replace(/^#\/?/, "");
    var parts = h.split("/");
    if (parts[0] === "company" && parts[1]) return { page: "company", slug: parts[1] };
    return { page: "dashboard" };
  }

  function setLang(lang) {
    currentLang = lang;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    render();
  }

  // ---- render ----
  function render() {
    chartInstances.forEach(function (c) { try { c.dispose(); } catch (e) {} });
    chartInstances = [];

    renderTopbar();
    var route = parseRoute();
    var main = document.getElementById("main");
    if (route.page === "company") {
      renderCompany(main, route.slug);
    } else {
      renderDashboard(main);
    }
    renderFooter();
  }

  function renderTopbar() {
    document.getElementById("app-title").textContent = t("appTitle");
    document.getElementById("app-subtitle").textContent = t("appSubtitle");
    document.getElementById("nav-dashboard").textContent = t("nav.dashboard");
    document.getElementById("nav-companies").textContent = t("nav.companies");
    document.getElementById("lang-en").classList.toggle("active", currentLang === "en");
    document.getElementById("lang-zh").classList.toggle("active", currentLang === "zh");
    document.getElementById("lang-id").classList.toggle("active", currentLang === "id");
  }

  function renderFooter() {
    document.getElementById("foot-source").textContent = t("footer.dataSource");
    document.getElementById("foot-disclaimer").textContent = t("footer.disclaimer");
  }

  function renderDashboard(main) {
    main.innerHTML =
      '<div class="page-title">' + t("dashboard.title") + '</div>' +
      '<div class="page-sub">' + t("asOf") + " " + D.meta.asOf + " · " + t("currencyNote") + '</div>' +
      renderKPIs() +
      '<div class="panel"><h3>' + t("dashboard.revenueChart.title") + '</h3><div id="rev-chart" class="chart-box"></div><div class="panel-note">' + t("dashboard.revenueChart.subtext") + '</div></div>' +
      '<div class="panel"><h3>' + t("dashboard.structureTitle") + '</h3><div id="struct-box"></div><div class="panel-note">' + t("dashboard.structureNote") + '</div><div class="panel-note" style="color:#c05e12">' + t("dashboard.offshoreNote") + '</div></div>' +
      '<div class="panel"><h3>' + t("dashboard.intercoTitle") + '</h3><div id="interco-chart" class="chart-box"></div><div class="panel-note">' + t("dashboard.intercoNote") + '</div></div>' +
      '<div class="panel"><h3>' + t("dashboard.statusTitle") + '</h3><div id="company-grid"></div></div>';

    renderRevChart();
    renderStructure();
    renderIntercoChart();
    renderCompanyGrid();
  }

  function renderKPIs() {
    var bpiv = D.companies.bpiv;
    var debtTotal = bpiv.payables[0].principal + bpiv.payables[0].interest;
    var invTotal = bpiv.investments.reduce(function (s, x) { return s + x.amount; }, 0);
    var cards = [
      { label: t("dashboard.kpi.netEquity"), val: fmtIDR(bpiv.bs.equity), cls: "danger", neg: bpiv.bs.equity < 0 },
      { label: t("dashboard.kpi.totalDebt"), val: fmtIDR(debtTotal), cls: "danger" },
      { label: t("dashboard.kpi.portfolio"), val: fmtIDR(invTotal), cls: "" },
      { label: t("dashboard.kpi.workingCapital"), val: fmtIDR(bpiv.workingCapital), cls: "warn", neg: bpiv.workingCapital < 0 },
      { label: t("dashboard.kpi.writeOff"), val: fmtIDR(bpiv.writeOff2025), cls: "warn" }
    ];
    var html = '<div class="grid-kpi">';
    cards.forEach(function (c) {
      html += '<div class="kpi-card ' + c.cls + '"><div class="kpi-label">' + c.label + '</div><div class="kpi-value' + (c.neg ? " neg" : "") + '">' + c.val + '</div></div>';
    });
    html += '</div>';
    return html;
  }

  function renderRevChart() {
    var el = document.getElementById("rev-chart");
    if (!el) return;
    var chart = echarts.init(el);
    chartInstances.push(chart);
    var years = D.revenue.years.map(function (y) { return String(y); });
    var seriesKeys = ["primtek", "bvi", "rajapremi", "mvp", "mcash", "tmn"];
    var series = seriesKeys.map(function (k) {
      return {
        name: t("dashboard.revenueChart." + k),
        type: "line",
        stack: "total",
        areaStyle: {},
        emphasis: { focus: "series" },
        data: D.revenue.series[k].map(function (v) { return Math.round(v / 1e6); })
      };
    });
    chart.setOption({
      tooltip: { trigger: "axis", axisPointer: { type: "cross" }, valueFormatter: function (v) { return "Rp " + v + " m"; } },
      legend: { top: 0, type: "scroll" },
      grid: { left: 12, right: 20, top: 36, bottom: 30, containLabel: true },
      xAxis: { type: "category", data: years, boundaryGap: false },
      yAxis: { type: "value", name: "Rp m" },
      series: series
    });
  }

  function renderIntercoChart() {
    var el = document.getElementById("interco-chart");
    if (!el) return;
    var chart = echarts.init(el);
    chartInstances.push(chart);
    var bpiv = D.companies.bpiv;
    var rows = bpiv.receivables
      .filter(function (r) { return !r.writtenOff; })
      .map(function (r) {
        return {
          name: tName(r.co),
          value: Math.round((r.principal + (r.interest || 0)) / 1e6)
        };
      });
    rows.sort(function (a, b) { return b.value - a.value; });
    chart.setOption({
      tooltip: { trigger: "axis", axisPointer: { type: "shadow" }, valueFormatter: function (v) { return "Rp " + v + " m"; } },
      grid: { left: 12, right: 30, top: 16, bottom: 20, containLabel: true },
      xAxis: { type: "value", name: "Rp m" },
      yAxis: { type: "category", data: rows.map(function (r) { return r.name; }) },
      series: [{
        type: "bar",
        data: rows.map(function (r) { return r.value; }),
        label: { show: true, position: "right", formatter: "{c} m" }
      }]
    });
  }

  function tName(slug) {
    if (slug === "yn_nominee") return "YN";
    if (slug === "mtpl") return "MTPL";
    if (slug === "ysx") return "YSX";
    if (slug === "psi") return "PSI (BVI)";
    if (slug === "tsn") return "TSN";
    if (slug === "bf") return "BF";
    if (slug === "greenland") return "Greenland";
    if (D.companies[slug] && D.companies[slug].legalNames) return D.companies[slug].legalNames[currentLang] || slug;
    return slug;
  }

  function renderCompanyGrid() {
    var el = document.getElementById("company-grid");
    if (!el) return;
    var html = '<div class="company-grid">';
    Object.keys(D.companies).forEach(function (slug) {
      var c = D.companies[slug];
      var stKey = c.statusKey;
      html +=
        '<div class="company-card" data-slug="' + slug + '">' +
        '<div class="name">' + c.shortName + ' <span class="status-badge st-' + c.status + '">' + t("dashboard.status." + c.status) + '</span></div>' +
        '<div class="legal">' + c.legalNames[currentLang] + '</div>' +
        '<div class="meta">' + t("company.type") + ': ' + t("types." + c.typeKey) + '</div>' +
        '</div>';
    });
    html += '</div>';
    el.innerHTML = html;
    var cards = el.querySelectorAll(".company-card");
    cards.forEach(function (card) {
      card.addEventListener("click", function () {
        location.hash = "#/company/" + card.getAttribute("data-slug");
      });
    });
  }

  function renderStructure() {
    var el = document.getElementById("struct-box");
    if (!el) return;
    el.innerHTML =
      '<svg class="structure-svg" viewBox="0 0 1180 620" xmlns="http://www.w3.org/2000/svg">' +
      structureSVGNodes() +
      '</svg>';
  }

  function structureSVGNodes() {
    // Layout coordinates
    var nodes = {
      mtpl: { x: 30, y: 14, w: 280, h: 64, label: "MTPL", sub: t("roles.mtplRole"), color: "#FDF2E9", stroke: "#D35400" },
      ysx: { x: 870, y: 14, w: 280, h: 64, label: "YSX", sub: t("roles.ysxNote"), color: "#EAF2FB", stroke: "#2E6DA4" },
      psi: { x: 450, y: 14, w: 280, h: 64, label: "PSI (BVI)", sub: t("roles.psiNote"), color: "#FDEBD0", stroke: "#E67E22" },
      prosho: { x: 390, y: 110, w: 400, h: 58, label: "Prosindo", sub: "Rp 2.5 bn · 50/50", color: "#EAF2FB", stroke: "#2E6DA4" },
      wintek: { x: 390, y: 200, w: 400, h: 58, label: "Wintek (Rajapay)", sub: "99.9% → BPIV · Rp0.98bn loan", color: "#EAF2FB", stroke: "#2E6DA4" },
      bpiv: { x: 290, y: 290, w: 600, h: 80, label: "BPIV", sub: "Net equity −11.0bn (Dec-25)", color: "#FDF2E9", stroke: "#D35400" },
      mvp: { x: 20, y: 430, w: 150, h: 90, label: "MVP", sub: "100% · dormant", color: "#EAF2FB", stroke: "#2E6DA4" },
      bvi: { x: 190, y: 430, w: 150, h: 90, label: "BVI (B-Startup)", sub: "99.9% · active", color: "#EAF2FB", stroke: "#2E6DA4" },
      tmn: { x: 360, y: 430, w: 150, h: 90, label: "TMN", sub: "70% (TSN 30%)", color: "#EAF2FB", stroke: "#2E6DA4" },
      primtek: { x: 530, y: 430, w: 150, h: 90, label: "Primtek", sub: "Seri A 100% · Seri B 51/49", color: "#EAF2FB", stroke: "#2E6DA4" },
      rajapremi: { x: 700, y: 430, w: 150, h: 90, label: "Rajapremi", sub: "via MVP 99.99%", color: "#EAF2FB", stroke: "#2E6DA4" },
      mcash: { x: 870, y: 430, w: 150, h: 90, label: "Mcash", sub: "CB investment", color: "#EAF2FB", stroke: "#2E6DA4" }
    };
    var s = "";
    Object.keys(nodes).forEach(function (k) {
      var n = nodes[k];
      s += '<rect x="' + n.x + '" y="' + n.y + '" width="' + n.w + '" height="' + n.h + '" rx="6" fill="' + n.color + '" stroke="' + n.stroke + '" stroke-width="1.5"/>';
      s += '<text x="' + (n.x + n.w / 2) + '" y="' + (n.y + 24) + '" text-anchor="middle" font-size="14" font-weight="700" fill="#1a1a1a">' + n.label + '</text>';
      s += '<text x="' + (n.x + n.w / 2) + '" y="' + (n.y + 44) + '" text-anchor="middle" font-size="10.5" fill="#555">' + n.sub + '</text>';
    });
    // edges
    function cx(n) { return n.x + n.w / 2; }
    function bottom(n) { return n.y + n.h; }
    function top(n) { return n.y; }
    function line(x1, y1, x2, y2, dash, label, lx, ly) {
      var d = dash ? ' stroke-dasharray="5,4"' : '';
      s += '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="#666" stroke-width="1.5"' + d + ' marker-end="url(#arr)"/>';
      if (label) s += '<text x="' + lx + '" y="' + ly + '" font-size="10.5" fill="#444">' + label + '</text>';
    }
    s += '<defs><marker id="arr" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#666"/></marker></defs>';
    line(cx(nodes.psi), bottom(nodes.psi), cx(nodes.prosho), top(nodes.prosho), false, "50%", cx(nodes.psi) + 4, (bottom(nodes.psi) + top(nodes.prosho)) / 2);
    line(cx(nodes.ysx), bottom(nodes.ysx), cx(nodes.prosho) + 100, top(nodes.prosho), false, "50%", cx(nodes.ysx) - 40, (bottom(nodes.ysx) + top(nodes.prosho)) / 2);
    line(cx(nodes.prosho), bottom(nodes.prosho), cx(nodes.wintek), top(nodes.wintek), false, "99.9%", cx(nodes.prosho) + 6, (bottom(nodes.prosho) + top(nodes.wintek)) / 2);
    line(cx(nodes.wintek), bottom(nodes.wintek), cx(nodes.bpiv), top(nodes.bpiv), false, "99%", cx(nodes.wintek) + 6, (bottom(nodes.wintek) + top(nodes.bpiv)) / 2);
    line(200, bottom(nodes.mtpl), 320, top(nodes.bpiv), true, "loan", 210, 230);
    line(790, bottom(nodes.wintek), 870, top(nodes.bpiv), true, "loan 0.98bn", 790, 260);
    // BPIV to portfolio
    var portKeys = ["mvp", "bvi", "tmn", "primtek", "rajapremi", "mcash"];
    var labels = { mvp: "2.8bn", bvi: "0.1bn", tmn: "1.05bn", primtek: "0.9bn", rajapremi: "loan", mcash: "CB" };
    portKeys.forEach(function (k) {
      var n = nodes[k];
      line(cx(n), bottom(nodes.bpiv), cx(n), top(n), k === "rajapremi" || k === "mcash", labels[k], cx(n) - 10, (bottom(nodes.bpiv) + top(n)) / 2 + 4);
    });
    return s;
  }

  function renderCompany(main, slug) {
    var c = D.companies[slug];
    if (!c) { main.innerHTML = '<p>Not found</p>'; return; }
    var legal = c.legalNames[currentLang] || c.legalNames.en;
    var html =
      '<a class="back-link" id="back-btn">' + t("company.backToDashboard") + '</a>' +
      '<div class="detail-header">' +
        '<div><h2>' + c.shortName + '</h2><div style="color:#555;font-size:13px">' + legal + '</div></div>' +
        '<div><span class="status-badge st-' + c.status + '">' + t("dashboard.status." + c.status) + '</span></div>' +
      '</div>' +
      '<div class="panel"><h3>' + t("company.description") + '</h3><p style="font-size:14px;line-height:1.7">' + t("desc." + c.descriptionKey) + '</p></div>' +
      twoColFinancials(c) +
      twoColOwnership(c) +
      intercoPanel(c) +
      revenuePanel(c);
    main.innerHTML = html;
    document.getElementById("back-btn").addEventListener("click", function () { location.hash = "#/"; });
    renderCompanyCharts(c);
  }

  function twoColFinancials(c) {
    if (!c.bs && !c.shareCapital) return "";
    var rows = "";
    if (c.shareCapital) rows += row(t("company.shareCapital"), fmtIDR(c.shareCapital));
    if (c.bs) {
      if (c.bs.assets != null) rows += row(t("company.assets"), fmtIDR(c.bs.assets));
      if (c.bs.liabilities != null) rows += row(t("company.liabilities"), fmtIDR(c.bs.liabilities));
      if (c.bs.equity != null) rows += row(t("company.equity"), fmtIDR(c.bs.equity));
      if (c.bs.netIncome != null) rows += row(t("company.netIncome"), fmtIDR(c.bs.netIncome));
    }
    if (c.keyItems) {
      c.keyItems.forEach(function (k) {
        rows += row(t("company." + k.labelKey) || t("types." + k.labelKey), fmtIDR(k.amount) + (k.note ? " (" + k.note + ")" : ""));
      });
    }
    return '<div class="panel"><h3>' + t("company.financials") + '</h3><table class="data"><tbody>' + rows + '</tbody></table><div class="panel-note">' + t("annualAsOf") + '</div></div>';
  }
  function row(label, val) {
    return '<tr><td>' + label + '</td><td class="num">' + val + '</td></tr>';
  }
  function twoColOwnership(c) {
    if (!c.ownership) return "";
    var rows = "";
    c.ownership.forEach(function (o) {
      var holderName = (o.holder === "originalShareholders") ? (currentLang === "zh" ? "原始股东" : (currentLang === "id" ? "Pemegang saham lama" : "Original shareholders")) : tName(o.holder);
      rows += '<tr><td>' + holderName + '</td><td class="num">' + fmtPct(o.pct) + '</td>' +
        (o.noteKey ? '<td style="font-size:11px;color:#888">' + t("notes." + o.noteKey) + '</td>' : '<td></td>') + '</tr>';
    });
    return '<div class="panel"><h3>' + t("company.ownership") + '</h3><table class="data"><thead><tr><th>' + t("company.legalName") + '</th><th>' + t("company.pctHeld") + '</th><th></th></tr></thead><tbody>' + rows + '</tbody></table></div>';
  }
  function intercoPanel(c) {
    var html = '<div class="panel"><h3>' + t("company.interco") + '</h3>';
    var any = false;
    if (c.receivables && c.receivables.length) {
      any = true;
      html += '<h4 style="font-size:13px;margin:8px 0 4px;color:#2e6da4">' + t("company.receivablesFrom") + '</h4><table class="data"><thead><tr><th></th><th class="num">' + t("company.principal") + '</th><th class="num">' + t("company.interest") + '</th><th class="num">' + t("company.total") + '</th></tr></thead><tbody>';
      c.receivables.forEach(function (r) {
        html += '<tr><td>' + tName(r.co) + (r.writtenOff ? ' <span style="color:#c0392b;font-size:11px">(' + t("company.writtenOff") + ')</span>' : '') + (r.usd ? ' <span style="font-size:11px;color:#888">(' + t("company.usdPortion") + ' USD ' + r.usd.toLocaleString() + ')</span>' : '') + '</td>' +
          '<td class="num">' + fmtIDR(r.principal) + '</td><td class="num">' + fmtIDR(r.interest || 0) + '</td><td class="num">' + fmtIDR(r.principal + (r.interest || 0)) + '</td></tr>';
      });
      html += '</tbody></table>';
    }
    if (c.payables && c.payables.length) {
      any = true;
      html += '<h4 style="font-size:13px;margin:12px 0 4px;color:#c0392b">' + t("company.payablesTo") + '</h4><table class="data"><thead><tr><th></th><th class="num">' + t("company.principal") + '</th><th class="num">' + t("company.interest") + '</th><th class="num">' + t("company.total") + '</th></tr></thead><tbody>';
      c.payables.forEach(function (r) {
        html += '<tr><td>' + tName(r.co) + (r.usd ? ' <span style="font-size:11px;color:#888">(' + t("company.usdPortion") + ' USD ' + r.usd.toLocaleString() + ')</span>' : '') + '</td>' +
          '<td class="num">' + fmtIDR(r.principal) + '</td><td class="num">' + fmtIDR(r.interest || 0) + '</td><td class="num">' + fmtIDR(r.principal + (r.interest || 0)) + '</td></tr>';
      });
      html += '</tbody></table>';
    }
    if (!any) html += '<p style="color:#888;font-size:13px">' + t("company.noHistory") + '</p>';
    html += '</div>';
    return html;
  }
  function revenuePanel(c) {
    var has = D.revenue.series[c.slug];
    if (!has) return "";
    var hasData = has.some(function (v) { return v > 0; });
    if (!hasData) return '<div class="panel"><h3>' + t("company.history") + '</h3><p style="color:#888">' + t("company.noHistory") + '</p></div>';
    return '<div class="panel"><h3>' + t("company.history") + '</h3><div id="co-rev-chart" class="chart-box"></div></div>';
  }
  function renderCompanyCharts(c) {
    var el = document.getElementById("co-rev-chart");
    if (!el || !D.revenue.series[c.slug]) return;
    var chart = echarts.init(el);
    chartInstances.push(chart);
    chart.setOption({
      tooltip: { trigger: "axis", valueFormatter: function (v) { return "Rp " + v + " m"; } },
      grid: { left: 12, right: 20, top: 20, bottom: 30, containLabel: true },
      xAxis: { type: "category", data: D.revenue.years.map(String) },
      yAxis: { type: "value", name: "Rp m" },
      series: [{
        type: "bar",
        data: D.revenue.series[c.slug].map(function (v) { return Math.round(v / 1e6); })
      }]
    });
  }

  // ---- init ----
  function init() {
    try { currentLang = localStorage.getItem(LANG_KEY) || "en"; } catch (e) { currentLang = "en"; }
    document.getElementById("lang-en").addEventListener("click", function () { setLang("en"); });
    document.getElementById("lang-zh").addEventListener("click", function () { setLang("zh"); });
    document.getElementById("lang-id").addEventListener("click", function () { setLang("id"); });
    document.getElementById("nav-dashboard").addEventListener("click", function (e) { e.preventDefault(); location.hash = "#/"; });
    document.getElementById("nav-companies").addEventListener("click", function (e) { e.preventDefault(); location.hash = "#/"; });
    document.querySelector(".brand").addEventListener("click", function () { location.hash = "#/"; });
    window.addEventListener("hashchange", render);
    render();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
