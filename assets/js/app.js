/* BPIV Information System — app.js */
(function () {
  "use strict";
  var I = window.BPIV_I18N;
  var D = window.BPIV_DATA;
  var LANG_KEY = "bpiv_lang";
  var currentLang = "en";
  var chartInstances = [];

  function t(key) {
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
    if (v >= 1e9) return sign + (v / 1e9).toFixed(2) + " " + t("dashboard.kpiUnit.bn");
    if (v >= 1e6) return sign + (v / 1e6).toFixed(1) + " " + t("dashboard.kpiUnit.m");
    return sign + v.toLocaleString();
  }
  function fmtPct(p) {
    if (p == null) return "—";
    return (p * 100).toFixed(1).replace(/\.0$/, "") + "%";
  }
  function tName(slug) {
    if (slug === "yn_nominee") return "YN";
    if (slug === "mtpl") return "MTPL";
    if (slug === "ysx") return "YSX";
    if (slug === "psi") return "PSI (BVI)";
    if (slug === "tsn") return "TSN";
    if (slug === "bf") return "BF";
    if (slug === "greenland") return "Greenland";
    if (slug === "other") return t("notes.mvpOther");
    if (slug === "originalShareholders") return t("notes.mcashNote").split(".")[0];
    if (D.companies[slug] && D.companies[slug].legalNames) return D.companies[slug].legalNames[currentLang] || slug;
    return slug;
  }

  function parseRoute() {
    var h = location.hash.replace(/^#\/?/, "");
    var parts = h.split("/");
    if (parts[0] === "company" && parts[1]) return { page: "company", slug: parts[1] };
    if (parts[0] === "admin") return { page: "admin" };
    return { page: "dashboard" };
  }

  function setLang(lang) {
    currentLang = lang;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    render();
  }

  function showLogin() {
    document.getElementById("login-screen").style.display = "flex";
    document.getElementById("app").style.display = "none";
    document.getElementById("login-title").textContent = t("appTitle");
    document.querySelectorAll(".login-lang").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === currentLang);
    });
  }
  function showApp() {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("app").style.display = "";
    var u = Auth.current();
    if (u) document.getElementById("user-info").textContent = t("auth.welcome") + ", " + (u.name || u.user);
    document.getElementById("user-mgmt-btn").style.display = Auth.isAdmin() ? "" : "none";
    document.getElementById("nav-admin").style.display = Auth.isAdmin() ? "" : "none";
  }

  function render() {
    chartInstances.forEach(function (c) { try { c.dispose(); } catch (e) {} });
    chartInstances = [];
    if (!Auth.current()) { showLogin(); return; }
    showApp();
    renderTopbar();
    var route = parseRoute();
    var main = document.getElementById("main");
    if (route.page === "company") renderCompany(main, route.slug);
    else if (route.page === "admin" && Auth.isAdmin()) renderAdmin(main);
    else renderDashboard(main);
    renderFooter();
  }

  function renderTopbar() {
    document.getElementById("app-title").textContent = t("appTitle");
    document.getElementById("app-subtitle").textContent = t("appSubtitle");
    document.getElementById("nav-dashboard").textContent = t("nav.dashboard");
    document.getElementById("nav-companies").textContent = t("nav.companies");
    document.getElementById("nav-admin").textContent = t("auth.userMgmt");
    document.getElementById("logout-label").textContent = t("auth.logout");
    document.getElementById("user-mgmt-label").textContent = t("auth.userMgmt");
    document.getElementById("lang-en").classList.toggle("active", currentLang === "en");
    document.getElementById("lang-zh").classList.toggle("active", currentLang === "zh");
    document.getElementById("lang-id").classList.toggle("active", currentLang === "id");
  }

  function renderFooter() {
    document.getElementById("foot-source").textContent = t("footer.dataSource");
    document.getElementById("foot-disclaimer").textContent = t("footer.disclaimer");
  }

  function renderDashboard(main) {
    var bpiv = D.companies.bpiv;
    var debtTotal = bpiv.payables[0].principal + bpiv.payables[0].interest + bpiv.payables[1].principal + bpiv.payables[1].interest;
    var invTotal = bpiv.equityInvestments.reduce(function (s, x) { return s + x.amount; }, 0);
    var activeRec = bpiv.receivables.filter(function (r) { return !r.writtenOff; });

    main.innerHTML =
      '<div class="page-title">' + t("dashboard.title") + '</div>' +
      '<div class="page-sub">' + t("asOf") + " " + D.meta.asOf + " · " + t("currencyNote") + '</div>' +
      renderKPIs(bpiv, debtTotal, invTotal) +
      '<div class="panel"><h3>' + t("dashboard.revenueChart.title") + '</h3><div id="rev-chart" class="chart-box"></div><div class="panel-note">' + t("dashboard.revenueChart.subtext") + '</div></div>' +
      '<div class="panel"><h3>' + t("dashboard.structureTitle") + '</h3><div id="struct-box"></div><div class="panel-note">' + t("dashboard.structureNote") + '</div><div class="panel-note" style="color:#c05e12">' + t("dashboard.offshoreNote") + '</div></div>' +
      '<div class="panel"><h3>' + t("dashboard.riskTitle") + '</h3>' +
      '<p class="risk-desc">' + t("dashboard.riskDesc") + '</p>' +
      '<div class="two-col">' +
        '<div><h4 class="sub-h">' + t("dashboard.debtBreakdownTitle") + '</h4><div id="debt-chart" class="chart-box" style="height:280px"></div></div>' +
        '<div><h4 class="sub-h">' + t("dashboard.solvencyTitle") + '</h4>' + solvencyTable(bpiv) + '</div>' +
      '</div></div>' +
      '<div class="panel"><h3>' + t("dashboard.equityInvTitle") + '</h3>' + eqInvTable(bpiv) + '</div>' +
      '<div class="panel"><h3>' + t("dashboard.receivablesDetailTitle") + '</h3>' + intercoDetailTable(activeRec) +
      '<div class="panel-note">' + t("dashboard.intercoNote") + '</div></div>' +
      '<div class="panel"><h3>' + t("dashboard.payablesDetailTitle") + '</h3>' + intercoDetailTable(bpiv.payables) + '</div>' +
      '<div class="panel"><h3>' + t("dashboard.intercoTitle") + '</h3><div id="interco-chart" class="chart-box"></div><div class="panel-note">' + t("dashboard.intercoNote") + '</div></div>' +
      '<div class="panel"><h3>' + t("dashboard.statusTitle") + '</h3><div id="company-grid"></div></div>';

    renderRevChart();
    renderStructure();
    renderDebtChart(bpiv);
    renderIntercoChart();
    renderCompanyGrid();
  }

  function solvencyTable(bpiv) {
    var rows =
      solRow(t("company.equity"), fmtIDR(bpiv.bs.equity), bpiv.bs.equity < 0) +
      solRow(t("dashboard.kpi.totalDebt"), fmtIDR(bpiv.payables[0].principal + bpiv.payables[0].interest + bpiv.payables[1].principal + bpiv.payables[1].interest), true) +
      solRow(t("company.assets"), fmtIDR(bpiv.bs.assets), false) +
      solRow(t("company.liabilities"), fmtIDR(bpiv.bs.liabilities), true) +
      solRow(t("dashboard.kpi.workingCapital"), fmtIDR(bpiv.workingCapital), bpiv.workingCapital < 0) +
      solRow(t("company.netIncome"), fmtIDR(bpiv.bs.netIncome), bpiv.bs.netIncome < 0);
    return '<table class="data compact"><tbody>' + rows + '</tbody></table>';
  }
  function solRow(label, val, neg) {
    return '<tr><td>' + label + '</td><td class="num' + (neg ? ' neg-val' : '') + '">' + val + '</td></tr>';
  }

  function eqInvTable(bpiv) {
    var rows = '<thead><tr><th></th><th class="num">' + t("dashboard.amountCol") + '</th><th>' + t("dashboard.dateCol") + '</th><th></th></tr></thead><tbody>';
    bpiv.equityInvestments.forEach(function (inv) {
      rows += '<tr><td>' + tName(inv.co) + '</td><td class="num">' + fmtIDR(inv.amount) + '</td><td>' + inv.date + '</td><td style="font-size:11px;color:var(--text-muted)">' + t("notes." + inv.noteKey) + '</td></tr>';
    });
    return '<table class="data">' + rows + '</tbody></table>';
  }

  function intercoDetailTable(list) {
    var rows = '<thead><tr><th></th><th class="num">' + t("dashboard.principalCol") + '</th><th class="num">' + t("dashboard.interestCol") + '</th><th class="num">' + t("dashboard.totalCol") + '</th><th>' + t("dashboard.dateCol") + '</th><th></th></tr></thead><tbody>';
    list.forEach(function (r) {
      var total = r.principal + (r.interest || 0);
      var usd = r.usd ? ' <span class="muted">(USD ' + r.usd.toLocaleString() + ')</span>' : '';
      var wo = r.writtenOff ? ' <span class="danger">(' + t("company.writtenOff") + ')</span>' : '';
      rows += '<tr><td>' + tName(r.co) + wo + usd + '</td><td class="num">' + fmtIDR(r.principal) + '</td><td class="num">' + fmtIDR(r.interest || 0) + '</td><td class="num"><strong>' + fmtIDR(total) + '</strong></td><td>' + (r.date || "—") + '</td><td class="muted" style="font-size:11px">' + (r.noteKey ? t("notes." + r.noteKey) : "") + '</td></tr>';
    });
    return '<table class="data">' + rows + '</tbody></table>';
  }

  function renderKPIs(bpiv, debtTotal, invTotal) {
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
    return html + '</div>';
  }

  function renderRevChart() {
    var el = document.getElementById("rev-chart");
    if (!el) return;
    var chart = echarts.init(el);
    chartInstances.push(chart);
    var years = D.revenue.years.map(String);
    var seriesKeys = ["primtek", "bvi", "rajapremi", "mvp", "mcash", "tmn"];
    var series = seriesKeys.map(function (k) {
      return {
        name: t("dashboard.revenueChart." + k),
        type: "line", stack: "total", areaStyle: {}, emphasis: { focus: "series" },
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

  function renderDebtChart(bpiv) {
    var el = document.getElementById("debt-chart");
    if (!el) return;
    var chart = echarts.init(el);
    chartInstances.push(chart);
    chart.setOption({
      tooltip: { trigger: "axis", axisPointer: { type: "shadow" }, valueFormatter: function (v) { return "Rp " + v + " m"; } },
      legend: { top: 0 },
      grid: { left: 12, right: 20, top: 30, bottom: 20, containLabel: true },
      xAxis: { type: "category", data: bpiv.payables.map(function (r) { return tName(r.co); }) },
      yAxis: { type: "value", name: "Rp m" },
      series: [
        { name: t("dashboard.principalCol"), type: "bar", stack: "debt", data: bpiv.payables.map(function (r) { return Math.round(r.principal / 1e6); }) },
        { name: t("dashboard.interestCol"), type: "bar", stack: "debt", data: bpiv.payables.map(function (r) { return Math.round((r.interest || 0) / 1e6); }) }
      ]
    });
  }

  function renderIntercoChart() {
    var el = document.getElementById("interco-chart");
    if (!el) return;
    var chart = echarts.init(el);
    chartInstances.push(chart);
    var rows = D.companies.bpiv.receivables
      .filter(function (r) { return !r.writtenOff; })
      .map(function (r) { return { name: tName(r.co), value: Math.round((r.principal + (r.interest || 0)) / 1e6) }; })
      .sort(function (a, b) { return b.value - a.value; });
    chart.setOption({
      tooltip: { trigger: "axis", axisPointer: { type: "shadow" }, valueFormatter: function (v) { return "Rp " + v + " m"; } },
      grid: { left: 12, right: 50, top: 16, bottom: 20, containLabel: true },
      xAxis: { type: "value", name: "Rp m" },
      yAxis: { type: "category", data: rows.map(function (r) { return r.name; }) },
      series: [{ type: "bar", data: rows.map(function (r) { return r.value; }), label: { show: true, position: "right", formatter: "{c} m" } }]
    });
  }

  function renderCompanyGrid() {
    var el = document.getElementById("company-grid");
    if (!el) return;
    var html = '<div class="company-grid">';
    Object.keys(D.companies).forEach(function (slug) {
      var c = D.companies[slug];
      html +=
        '<div class="company-card" data-slug="' + slug + '">' +
        '<div class="name">' + c.shortName + ' <span class="status-badge st-' + c.status + '">' + t("dashboard.status." + c.status) + '</span></div>' +
        '<div class="legal">' + c.legalNames[currentLang] + '</div>' +
        '<div class="meta">' + t("company.type") + ': ' + t("types." + c.typeKey) + '</div></div>';
    });
    el.innerHTML = html + '</div>';
    el.querySelectorAll(".company-card").forEach(function (card) {
      card.addEventListener("click", function () { location.hash = "#/company/" + card.getAttribute("data-slug"); });
    });
  }

  function renderStructure() {
    var el = document.getElementById("struct-box");
    if (!el) return;
    el.innerHTML = '<svg class="structure-svg" viewBox="0 0 1180 620" xmlns="http://www.w3.org/2000/svg">' + structureSVG() + '</svg>';
  }

  function structureSVG() {
    var nodes = {
      mtpl: { x: 30, y: 10, w: 280, h: 78, label: "MTPL", sub: t("dashboard.nodeMtpl"), color: "#FDF2E9", stroke: "#D35400" },
      ysx: { x: 870, y: 10, w: 280, h: 78, label: "YSX", sub: t("dashboard.nodeYsx"), color: "#EAF2FB", stroke: "#2E6DA4" },
      psi: { x: 450, y: 10, w: 280, h: 78, label: "PSI (BVI)", sub: t("dashboard.nodePsi"), color: "#FDEBD0", stroke: "#E67E22" },
      prosho: { x: 390, y: 118, w: 400, h: 58, label: "Prosindo", sub: "Rp 2.5 bn · 50/50", color: "#EAF2FB", stroke: "#2E6DA4" },
      wintek: { x: 390, y: 200, w: 400, h: 58, label: "Wintek (Rajapay)", sub: "99.9% → BPIV · Rp0.98bn loan", color: "#EAF2FB", stroke: "#2E6DA4" },
      bpiv: { x: 290, y: 290, w: 600, h: 80, label: "BPIV", sub: "Net equity −11.0bn (Dec-25)", color: "#FDF2E9", stroke: "#D35400" },
      mvp: { x: 20, y: 430, w: 150, h: 90, label: "MVP", sub: "BPIV 70% (64.71% post-val)", color: "#EAF2FB", stroke: "#2E6DA4" },
      bvi: { x: 190, y: 430, w: 150, h: 90, label: "BVI (B-Startup)", sub: "99.9% · active", color: "#EAF2FB", stroke: "#2E6DA4" },
      tmn: { x: 360, y: 430, w: 150, h: 90, label: "TMN", sub: "70% (TSN 30%)", color: "#EAF2FB", stroke: "#2E6DA4" },
      primtek: { x: 530, y: 430, w: 150, h: 90, label: "Primtek", sub: "Seri A 100% · Seri B 51/49", color: "#EAF2FB", stroke: "#2E6DA4" },
      rajapremi: { x: 700, y: 430, w: 150, h: 90, label: "Rajapremi", sub: "via MVP 99.99%", color: "#EAF2FB", stroke: "#2E6DA4" },
      mcash: { x: 870, y: 430, w: 150, h: 90, label: "Mcash", sub: "CB investment", color: "#EAF2FB", stroke: "#2E6DA4" }
    };
    var s = '<defs><marker id="arr" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#666"/></marker></defs>';
    Object.keys(nodes).forEach(function (k) {
      var n = nodes[k];
      s += '<rect x="' + n.x + '" y="' + n.y + '" width="' + n.w + '" height="' + n.h + '" rx="6" fill="' + n.color + '" stroke="' + n.stroke + '" stroke-width="1.5"/>';
      s += '<text x="' + (n.x + n.w / 2) + '" y="' + (n.y + 24) + '" text-anchor="middle" font-size="14" font-weight="700" fill="#1a1a1a">' + n.label + '</text>';
      s += '<text x="' + (n.x + n.w / 2) + '" y="' + (n.y + 44) + '" text-anchor="middle" font-size="10.5" fill="#555">' + n.sub + '</text>';
    });
    function cx(n) { return n.x + n.w / 2; }
    function line(x1, y1, x2, y2, dash, label, lx, ly) {
      var d = dash ? ' stroke-dasharray="5,4"' : '';
      s += '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="#666" stroke-width="1.5"' + d + ' marker-end="url(#arr)"/>';
      if (label) s += '<text x="' + lx + '" y="' + ly + '" font-size="10.5" fill="#444">' + label + '</text>';
    }
    line(cx(nodes.psi), nodes.psi.y + 78, cx(nodes.prosho), nodes.prosho.y, false, "50%", cx(nodes.psi) + 4, 105);
    line(cx(nodes.ysx), nodes.ysx.y + 78, cx(nodes.prosho) + 100, nodes.prosho.y, false, "50%", cx(nodes.ysx) - 40, 105);
    line(cx(nodes.prosho), nodes.prosho.y + 58, cx(nodes.wintek), nodes.wintek.y, false, "99.9%", cx(nodes.prosho) + 6, 186);
    line(cx(nodes.wintek), nodes.wintek.y + 58, cx(nodes.bpiv), nodes.bpiv.y, false, "99%", cx(nodes.wintek) + 6, 276);
    line(200, nodes.mtpl.y + 78, 320, nodes.bpiv.y, true, "loan", 210, 235);
    line(790, nodes.wintek.y + 58, 870, nodes.bpiv.y, true, "0.98bn", 790, 260);
    var portKeys = ["mvp", "bvi", "tmn", "primtek", "rajapremi", "mcash"];
    var labels = { mvp: "2.8bn", bvi: "0.1bn", tmn: "1.05bn", primtek: "0.9bn", rajapremi: "loan", mcash: "CB" };
    portKeys.forEach(function (k) {
      var n = nodes[k];
      line(cx(n), nodes.bpiv.y + 80, cx(n), n.y, k === "rajapremi" || k === "mcash", labels[k], cx(n) - 10, (nodes.bpiv.y + 80 + n.y) / 2 + 4);
    });
    return s;
  }

  function renderCompany(main, slug) {
    var c = D.companies[slug];
    if (!c) { main.innerHTML = "<p>Not found</p>"; return; }
    var legal = c.legalNames[currentLang] || c.legalNames.en;
    main.innerHTML =
      '<a class="back-link" id="back-btn">' + t("company.backToDashboard") + "</a>" +
      '<div class="detail-header"><div><h2>' + c.shortName + '</h2><div class="muted">' + legal + "</div></div>" +
      '<div><span class="status-badge st-' + c.status + '">' + t("dashboard.status." + c.status) + "</span></div></div>" +
      '<div class="panel"><h3>' + t("company.description") + '</h3><p class="risk-desc">' + t("desc." + c.descriptionKey) + "</p></div>" +
      '<div class="two-col">' + financialsPanel(c) + ownershipPanel(c) + "</div>" +
      intercoPanel(c) + revenuePanel(c);
    document.getElementById("back-btn").addEventListener("click", function () { location.hash = "#/"; });
    renderCompanyCharts(c);
  }

  function financialsPanel(c) {
    var rows = "";
    if (c.shareCapital) rows += row(t("company.shareCapital"), fmtIDR(c.shareCapital));
    if (c.bs) {
      if (c.bs.assets != null) rows += row(t("company.assets"), fmtIDR(c.bs.assets));
      if (c.bs.liabilities != null) rows += row(t("company.liabilities"), fmtIDR(c.bs.liabilities));
      if (c.bs.equity != null) rows += row(t("company.equity"), fmtIDR(c.bs.equity));
      if (c.bs.netIncome != null) rows += row(t("company.netIncome"), fmtIDR(c.bs.netIncome));
    }
    if (c.keyItems) c.keyItems.forEach(function (k) {
      rows += row(k.note || k.labelKey, fmtIDR(k.amount));
    });
    if (!rows) return '<div class="panel"></div>';
    return '<div class="panel"><h3>' + t("company.financials") + '</h3><table class="data"><tbody>' + rows + '</tbody></table><div class="panel-note">' + t("annualAsOf") + "</div></div>";
  }
  function row(label, val) { return '<tr><td>' + label + '</td><td class="num">' + val + "</td></tr>"; }

  function ownershipPanel(c) {
    if (!c.ownership) return '<div class="panel"></div>';
    var rows = "";
    c.ownership.forEach(function (o) {
      rows += "<tr><td>" + tName(o.holder) + '</td><td class="num">' + fmtPct(o.pct) + '</td><td class="muted" style="font-size:11px">' + (o.noteKey ? t("notes." + o.noteKey) : "") + "</td></tr>";
    });
    var noteHtml = c.ownershipNoteKey ? '<div class="panel-note note-warn">' + t("notes." + c.ownershipNoteKey) + "</div>" : "";
    return '<div class="panel"><h3>' + t("company.ownership") + '</h3><table class="data"><thead><tr><th>' + t("company.legalName") + '</th><th>' + t("company.pctHeld") + "</th><th></th></tr></thead><tbody>" + rows + "</tbody></table>" + noteHtml + "</div>";
  }

  function intercoPanel(c) {
    var html = '<div class="panel"><h3>' + t("company.interco") + "</h3>";
    var any = false;
    var hdr = '<thead><tr><th></th><th class="num">' + t("dashboard.principalCol") + '</th><th class="num">' + t("dashboard.interestCol") + '</th><th class="num">' + t("dashboard.totalCol") + "</th><th>" + t("dashboard.dateCol") + "</th></tr></thead>";
    if (c.receivables && c.receivables.length) {
      any = true;
      html += '<h4 class="sub-h" style="color:var(--primary-light)">' + t("company.receivablesFrom") + '</h4><table class="data">' + hdr + "<tbody>";
      c.receivables.forEach(function (r) {
        html += "<tr><td>" + tName(r.co) + (r.writtenOff ? ' <span class="danger">(' + t("company.writtenOff") + ")</span>" : "") + (r.usd ? ' <span class="muted">(USD ' + r.usd.toLocaleString() + ")</span>" : "") + '</td><td class="num">' + fmtIDR(r.principal) + '</td><td class="num">' + fmtIDR(r.interest || 0) + '</td><td class="num">' + fmtIDR(r.principal + (r.interest || 0)) + "</td><td>" + (r.date || "—") + "</td></tr>";
      });
      html += "</tbody></table>";
    }
    if (c.payables && c.payables.length) {
      any = true;
      html += '<h4 class="sub-h" style="color:var(--danger)">' + t("company.payablesTo") + '</h4><table class="data">' + hdr + "<tbody>";
      c.payables.forEach(function (r) {
        html += "<tr><td>" + tName(r.co) + (r.usd ? ' <span class="muted">(USD ' + r.usd.toLocaleString() + ")</span>" : "") + '</td><td class="num">' + fmtIDR(r.principal) + '</td><td class="num">' + fmtIDR(r.interest || 0) + '</td><td class="num">' + fmtIDR(r.principal + (r.interest || 0)) + "</td><td>" + (r.date || "—") + "</td></tr>";
      });
      html += "</tbody></table>";
    }
    if (!any) html += '<p class="muted">' + t("company.noHistory") + "</p>";
    return html + "</div>";
  }

  function revenuePanel(c) {
    var has = D.revenue.series[c.slug];
    if (!has || !has.some(function (v) { return v > 0; }))
      return '<div class="panel"><h3>' + t("company.history") + '</h3><p class="muted">' + t("company.noHistory") + "</p></div>";
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
      series: [{ type: "bar", data: D.revenue.series[c.slug].map(function (v) { return Math.round(v / 1e6); }) }]
    });
  }

  function renderAdmin(main) {
    var users = Auth.listUsers();
    var rows = "";
    users.forEach(function (u) {
      var badge = '<span class="role-badge role-' + u.role + '">' + t("auth." + u.role) + "</span>";
      rows += "<tr><td>" + u.name + "</td><td>" + u.user + "</td><td>" + badge + '</td><td><div class="change-pw-row"><input type="password" placeholder="' + t("auth.newPw") + '" id="pw-' + u.user + '" style="padding:4px 8px;border:1px solid var(--border);border-radius:4px;font-size:12px;"><button class="danger-btn" onclick="window.__bpivCp(\'' + u.user + "')\">" + t("auth.updateBtn") + '</button></div></td><td>' + (u.user === "admin" ? "—" : '<button class="danger-btn" onclick="window.__bpivDel(\'' + u.user + "')\">" + t("auth.delete") + "</button>") + "</td></tr>";
    });
    main.innerHTML =
      '<div class="page-title">' + t("auth.userMgmt") + "</div>" +
      '<div class="panel admin-panel"><h3>' + t("auth.createUser") + "</h3>" +
      '<div class="admin-form">' +
      "<div><label>" + t("auth.usernameLabel") + '</label><input id="nu-user"></div>' +
      "<div><label>" + t("auth.nameLabel") + '</label><input id="nu-name"></div>' +
      "<div><label>" + t("auth.passLabel") + '</label><input id="nu-pass" type="password"></div>' +
      '<div><label>' + t("auth.roleLabel") + '</label><select id="nu-role"><option value="viewer">' + t("auth.viewer") + '</option><option value="admin">' + t("auth.admin") + "</option></select></div>" +
      '<button onclick="window.__bpivCreate()">' + t("auth.createBtn") + "</button></div>" +
      '<div id="admin-msg" class="admin-msg"></div></div>' +
      '<div class="panel"><h3>' + t("auth.userList") + '</h3><table class="data"><thead><tr><th>' + t("auth.nameLabel") + '</th><th>' + t("auth.usernameLabel") + '</th><th>' + t("auth.roleLabel") + '</th><th>' + t("auth.changePw") + "</th><th></th></tr></thead><tbody>" + rows + "</tbody></table></div>";
  }

  window.__bpivCreate = function () {
    var u = document.getElementById("nu-user").value.trim();
    var n = document.getElementById("nu-name").value.trim();
    var p = document.getElementById("nu-pass").value;
    var r = document.getElementById("nu-role").value;
    var res = Auth.createUser(u, p, r, n);
    var msg = document.getElementById("admin-msg");
    if (res.ok) { msg.style.color = "var(--success)"; msg.textContent = t("auth.userCreated"); render(); }
    else { msg.style.color = "var(--danger)"; msg.textContent = t("auth.userExists"); }
  };
  window.__bpivCp = function (user) {
    var p = document.getElementById("pw-" + user).value;
    if (!p) return;
    Auth.changePassword(user, p);
    render();
  };
  window.__bpivDel = function (user) {
    if (!confirm(t("auth.confirmDelete"))) return;
    Auth.deleteUser(user);
    render();
  };

  function init() {
    try { currentLang = localStorage.getItem(LANG_KEY) || "en"; } catch (e) { currentLang = "en"; }
    document.getElementById("login-btn").addEventListener("click", doLogin);
    document.getElementById("login-password").addEventListener("keydown", function (e) { if (e.key === "Enter") doLogin(); });
    document.getElementById("login-username").addEventListener("keydown", function (e) { if (e.key === "Enter") doLogin(); });
    document.querySelectorAll(".login-lang").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
    });
    document.getElementById("lang-en").addEventListener("click", function () { setLang("en"); });
    document.getElementById("lang-zh").addEventListener("click", function () { setLang("zh"); });
    document.getElementById("lang-id").addEventListener("click", function () { setLang("id"); });
    document.getElementById("logout-btn").addEventListener("click", function () { Auth.logout(); location.hash = "#/"; render(); });
    document.getElementById("user-mgmt-btn").addEventListener("click", function () { location.hash = "#/admin"; });
    document.getElementById("nav-dashboard").addEventListener("click", function (e) { e.preventDefault(); location.hash = "#/"; });
    document.getElementById("nav-companies").addEventListener("click", function (e) { e.preventDefault(); location.hash = "#/"; });
    document.getElementById("nav-admin").addEventListener("click", function (e) { e.preventDefault(); location.hash = "#/admin"; });
    document.querySelector(".brand").addEventListener("click", function () { location.hash = "#/"; });
    window.addEventListener("hashchange", render);
    render();
  }

  function doLogin() {
    var u = document.getElementById("login-username").value.trim();
    var p = document.getElementById("login-password").value;
    var res = Auth.login(u, p);
    var err = document.getElementById("login-error");
    if (res.ok) { err.style.display = "none"; render(); }
    else { err.textContent = t("auth.error"); err.style.display = "block"; }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
