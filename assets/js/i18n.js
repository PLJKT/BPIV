// i18n dictionaries — every visible string must exist in all three languages
window.BPIV_I18N = {
  en: {
    appTitle: "BPIV Group Information System",
    appSubtitle: "Investment & Financial Dashboard",
    asOf: "As of",
    currencyNote: "All amounts in IDR unless stated otherwise",
    annualAsOf: "Annual balance sheet as of 31 Dec 2025",

    nav: {
      dashboard: "Dashboard",
      structure: "Group Structure",
      companies: "Portfolio Companies",
      about: "About"
    },

    lang: {
      en: "English",
      zh: "中文",
      id: "Bahasa Indonesia"
    },

    dashboard: {
      title: "Group Dashboard",
      kpi: {
        netEquity: "BPIV Net Equity (Dec-25)",
        totalDebt: "Total Debt to MTPL (incl. interest)",
        portfolio: "Equity Investment Portfolio",
        workingCapital: "Working Capital (31 Dec-25)",
        operatingRevenue: "Group Revenue 2025* (10M)",
        writeOff: "Receivables Written Off (2025)"
      },
      kpiUnit: { bn: "bn", m: "m" },
      revenueChart: {
        title: "Group Revenue by Company (IDR)",
        subtext: "*2025 = Jan–Oct YTD",
        primtek: "Primtek",
        bvi: "BVI (B-Startup)",
        rajapremi: "Rajapremi",
        mvp: "MVP",
        mcash: "Mcash",
        tmn: "TMN"
      },
      structureTitle: "Ownership & Fund Flow Structure",
      structureNote: "Solid = equity holding; orange dashed = intercompany loan. YSX and PSI have no relationship with MTPL. MTPL only lends directly to BPIV. YN is a nominee holder (Dana Talangan).",
      offshoreNote: "Offshore shell tools (Wellgrow, NST, EVF) have been deactivated and excluded from the structure; their funds are already on BPIV's books.",
      statusTitle: "Portfolio Status",
      status: {
        active: "Active",
        shrinking: "Shrinking",
        dormant: "Dormant",
        distressed: "Distressed",
        holding: "Holding"
      },
      intercoTitle: "BPIV Intercompany Receivables (31 Oct-25)",
      intercoNote: "Receivables from portfolio companies; Wellgrow already written off in Dec-25.",
      riskTitle: "Risk Assessment",
      riskDesc: "BPIV is balance-sheet insolvent. Total external debt is Rp19.58bn (principal Rp15.75bn + accrued interest Rp3.84bn) against equity of negative Rp11.04bn. Cash on hand is only Rp4.5m. The company cannot service its debt from operations; all operating revenue comes from BVI (Rp115-426m/yr), insufficient to cover even accrued interest of Rp3.64bn to MTPL. The Rp3.38bn write-off in 2025 reflects deteriorated recoverability of intercompany loans.",
      debtBreakdownTitle: "Debt Structure: Principal vs Accrued Interest",
      solvencyTitle: "Solvency Metrics",
      equityInvTitle: "Equity Investments (BPIV → Portfolio)",
      receivablesDetailTitle: "Loans Receivable by Company",
      payablesDetailTitle: "Debts Payable to Lenders",
      dateCol: "Year",
      principalCol: "Principal",
      interestCol: "Accrued Interest",
      totalCol: "Total",
      amountCol: "Amount",
      drawdownTitle: "Drawdown Schedule",
      totalRow: "Total",
      nodeMtpl: "LP · direct lender to BPIV",
      nodeYsx: "Co-founder · 50%",
      nodePsi: "50% · main funder · interest-free"
    },

    company: {
      title: "Company Detail",
      overview: "Overview",
      ownership: "Ownership",
      financials: "Financial Position",
      interco: "Intercompany Balances",
      history: "Revenue History",
      noHistory: "No operating revenue history",
      shareCapital: "Paid-up Share Capital",
      status: "Status",
      type: "Type",
      assets: "Total Assets",
      liabilities: "Total Liabilities",
      equity: "Equity",
      netIncome: "Net Income (FY2025)",
      receivablesFrom: "Receivable from",
      payablesTo: "Payable to",
      interest: "Accrued Interest",
      principal: "Principal",
      total: "Total",
      usdPortion: "incl. USD",
      writtenOff: "written off",
      nomineeStake: "nominee (Dana Talangan)",
      investsIn: "Investment in",
      pctHeld: "Holding",
      description: "Description",
      backToDashboard: "← Back to Dashboard",
      legalName: "Legal Name"
    },

    types: {
      investmentCo: "Investment Holding",
      managementCo: "Management / Top Holding",
      holdingCo: "Investment Holding",
      investmentVehicle: "Investment Vehicle",
      operatingCo: "Operating Company",
      cbInvestment: "Convertible Note Investment"
    },

    roles: {
      mtplRole: "LP / Funder — lends directly to BPIV",
      ysxNote: "Co-founder (natural person). 50% shareholder of Prosindo.",
      psiNote: "BVI offshore company. 50% shareholder of Prosindo and main funder. Provides interest-free loans to Prosindo and Wintek; its NST loan was later transferred in full to BPIV books.",
      ynRole: "Nominee holder (natural person). Minority stakes funded via Dana Talangan.",
      tsnRole: "30% shareholder of TMN; also borrower from TMN (Rp190m + interest).",
      bfRole: "Entity holding 49% of Primtek Seri B in kind (technology contribution, no cash)."
    },

    notes: {
      nomineeStake: "Minority nominee stake — funds from Dana Talangan (advance for share subscription)",
      primtekSeriA: "Seri A shares (100% held by BPIV, Rp900m)",
      primtekSeriB: "Seri B: BPIV 51% + BF 49% (technology in-kind, unpaid). Original 10% treasury stock has been cancelled.",
      mcashNote: "BPIV holds a convertible note (CB), not shares. Equity is held by original shareholders, with unpaid share capital outstanding.",
      mvpInitial: "Initial ownership (paid-up shares)",
      mvpOther: "Other shareholders",
      mvpOwnershipNote: "Economic ownership is 64.71% after valuation increase; the 70% corresponds to paid-up share capital.",
      mvpInvNote: "Initial investment; 70% paid-up basis, diluted to 64.71% post-valuation.",
      tmnInvNote: "70% equity; TSN holds 30%.",
      primtekInvNote: "Seri A shares, 100%.",
      bviInvNote: "99.9% equity (0.1% nominee).",
      rajapremiLoanNote: "On-lent working capital; no accrued interest.",
      bviLoanNote: "Working capital loan with accrued interest.",
      mcashLoanNote: "Includes USD 61,818 from former NST channel (settled 2024).",
      tmnLoanNote: "On-lent capital with accrued interest.",
      wellgrowNote: "Offshore receivable; written off in Dec-2025.",
      primtekLoanNote: "Trade / working capital loan.",
      mtplLoanNote: "LP-style direct funding; interest-bearing.",
      wintekLoanNote: "On-lent by Prosindo group; interest-bearing."
    },

    desc: {
      bpivDesc: "BPIV is the group's central investment company, funded directly by MTPL as lender (LP-style). It holds equity in MVP, TMN, Primtek and BVI, and provides intercompany loans to Rajapremi, Mcash, TMN and others. As of Dec-2025 it is balance-sheet insolvent: equity is negative Rp11.0bn, driven by the Rp3.38bn write-off of receivables and cumulative interest owed to MTPL.",
      proshoDesc: "Prosinido (Prosindo) is the top holding company, owned 50/50 by co-founder YSX and BVI offshore company PSI. It holds 99.9% of Wintek. Its funding beyond paid-up capital comes from interest-free loans from PSI.",
      wintekDesc: "Wintek Investama Indonesia (brand Rajapay) is the intermediate holding company, 99.9% owned by Prosindo. It holds 99% of BPIV and has on-lent funds to BPIV (Rp0.99bn principal + Rp0.20bn accrued interest as of Dec-25).",
      mvpDesc: "MVP (PT Mega Value Prosperindo) is an investment vehicle. BPIV initially held 70% (on paid-up capital basis), diluted to 64.71% after valuation increase. Its only investment is 99.99% of Rajapremi (Rp2.0bn). It has been dormant since 2018.",
      bviDesc: "BVI (PT Batavia Visi Inovasi) operates under the brand B-Startup, providing office-building management and incubation services. It is the group's only stable cash-generating operating company, earning management fees of Rp115–426m per year. It owes BPIV Rp1.51bn + Rp0.57bn interest.",
      rajapremiDesc: "Rajapremi (PT Rajapremi Dot Com) runs an online commission business, 99.99% owned by MVP. Revenue has declined from a peak of Rp342m (2017) to roughly Rp23m (2025 YTD). It owes BPIV Rp1.83bn and BVI Rp0.76bn.",
      tmnDesc: "TMN (PT Teknomedia Mitra Nusantara) is 70% owned by BPIV and 30% by TSN. It has been dormant. TSN, as 30% shareholder, also borrowed Rp190m from TMN (plus Rp30.8m interest). TMN owes BPIV Rp0.97bn + Rp0.25bn interest.",
      primtekDesc: "Primtek (PT Primatama Teknologi Solusindo) is an IT services company. Seri A shares (Rp900m) are 100% held by BPIV. Seri B (Rp865m) is split BPIV 51% / BF 49%, where BF contributed technology in kind (no cash). The original 10% treasury stock has been cancelled. Revenue collapsed after 2021 and has been zero since 2022.",
      mcashDesc: "Mcash (PT Mobile Cash Indonesia) is held by BPIV via a convertible note (CB), not as a direct shareholder. Equity remains with the original shareholders, whose share capital is not fully paid. Mcash owes BPIV Rp1.43bn (including USD 61,818 from the former NST channel). The MainDulu JV was with Lyto/Indofun."
    },

    auth: {
      loginTitle: "Sign in to continue",
      username: "Username",
      password: "Password",
      signIn: "Sign In",
      error: "Invalid username or password",
      logout: "Logout",
      userMgmt: "User Management",
      welcome: "Welcome",
      admin: "Administrator",
      viewer: "Viewer",
      createUser: "Create New User",
      usernameLabel: "Username",
      nameLabel: "Display Name",
      passLabel: "Password",
      roleLabel: "Role",
      createBtn: "Create",
      changePw: "Change Password",
      newPw: "New Password",
      updateBtn: "Update",
      delete: "Delete",
      userList: "User List",
      cannotDeleteAdmin: "Cannot delete the admin account",
      userExists: "Username already exists",
      pwUpdated: "Password updated",
      userCreated: "User created",
      confirmDelete: "Delete this user?"
    },
    footer: {
      dataSource: "Source: Internal ledgers (Financial Report 2013–2025, Oct 2025) and 2025 annual reports.",
      disclaimer: "Internal management information. Not audited for external distribution."
    }
  },

  zh: {
    appTitle: "BPIV 集团信息系统",
    appSubtitle: "投资与财务仪表盘",
    asOf: "截至",
    currencyNote: "除特别注明外，金额单位均为印尼盾（IDR）",
    annualAsOf: "年度资产负债表截至 2025 年 12 月 31 日",

    nav: {
      dashboard: "仪表盘",
      structure: "集团结构",
      companies: "投资组合公司",
      about: "关于"
    },

    lang: {
      en: "English",
      zh: "中文",
      id: "Bahasa Indonesia"
    },

    dashboard: {
      title: "集团仪表盘",
      kpi: {
        netEquity: "BPIV 净资产（2025年12月）",
        totalDebt: "对 MTPL 总负债（含利息）",
        portfolio: "股权投资组合",
        workingCapital: "营运资金（2025年12月31日）",
        operatingRevenue: "集团 2025 年收入*（前10月）",
        writeOff: "2025 年应收核销"
      },
      kpiUnit: { bn: "十亿", m: "百万" },
      revenueChart: {
        title: "集团各公司收入（印尼盾）",
        subtext: "*2025 为 1–10 月累计",
        primtek: "Primtek",
        bvi: "BVI（B-Startup）",
        rajapremi: "Rajapremi",
        mvp: "MVP",
        mcash: "Mcash",
        tmn: "TMN"
      },
      structureTitle: "持股与资金流结构",
      structureNote: "实线 = 持股；橙色虚线 = 关联贷款。YSX、PSI 与 MTPL 无任何关系；MTPL 仅直接向 BPIV 放贷。YN 为代持人（Dana Talangan）。",
      offshoreNote: "海外壳工具（Wellgrow、NST、EVF）已失效并从结构中移除，其资金已并入 BPIV 账上。",
      statusTitle: "投资组合状态",
      status: {
        active: "运营中",
        shrinking: "萎缩中",
        dormant: "已休眠",
        distressed: "资不抵债",
        holding: "控股平台"
      },
      intercoTitle: "BPIV 关联应收（2025年10月31日）",
      intercoNote: "对投资组合公司的应收；Wellgrow 已于 2025 年 12 月核销。",
      riskTitle: "风险评估",
      riskDesc: "BPIV 已资不抵债。对外总负债 195.8 亿盾（本金 157.5 亿 + 应计利息 38.4 亿），净资产为负 110.4 亿盾。手头现金仅 450 万盾。公司无法通过经营偿还债务；唯一产生收入的 BVI 年管理费仅 1.15–4.26 亿盾，远不足以支付对 MTPL 的应计利息 36.4 亿盾。2025 年 33.8 亿盾应收核销反映关联贷款回收能力恶化。",
      debtBreakdownTitle: "债务结构：本金与应计利息",
      solvencyTitle: "偿债能力指标",
      equityInvTitle: "股权投资（BPIV → 投资组合）",
      receivablesDetailTitle: "各公司贷款应收明细",
      payablesDetailTitle: "贷款方应付明细",
      dateCol: "年份",
      principalCol: "本金",
      interestCol: "应计利息",
      totalCol: "合计",
      amountCol: "金额",
      drawdownTitle: "拨付时间表",
      totalRow: "合计",
      nodeMtpl: "资方 · 直接向 BPIV 放贷",
      nodeYsx: "联合创始人 · 50%",
      nodePsi: "50% · 主要出资方 · 无息"
    },

    company: {
      title: "公司详情",
      overview: "概览",
      ownership: "股权结构",
      financials: "财务状况",
      interco: "关联往来余额",
      history: "收入历史",
      noHistory: "无运营收入记录",
      shareCapital: "实缴股本",
      status: "状态",
      type: "类型",
      assets: "总资产",
      liabilities: "总负债",
      equity: "净资产",
      netIncome: "净利润（2025财年）",
      receivablesFrom: "应收",
      payablesTo: "应付",
      interest: "应计利息",
      principal: "本金",
      total: "合计",
      usdPortion: "其中美元",
      writtenOff: "已核销",
      nomineeStake: "代持（Dana Talangan）",
      investsIn: "对外投资",
      pctHeld: "持股比例",
      description: "公司简介",
      backToDashboard: "← 返回仪表盘",
      legalName: "法定名称"
    },

    types: {
      investmentCo: "投资控股公司",
      managementCo: "管理 / 顶层控股",
      holdingCo: "投资控股公司",
      investmentVehicle: "投资载体",
      operatingCo: "运营公司",
      cbInvestment: "可转债投资"
    },

    roles: {
      mtplRole: "资方 / LP —— 直接向 BPIV 放贷",
      ysxNote: "联合创始人（自然人），Prosinido 50% 股东。",
      psiNote: "BVI 离岸公司，Prosinido 50% 股东兼主要出资方。向 Prosinido 与 Wintek 均提供无息贷款；其对 NST 的贷款后已全额转入 BPIV 账上。",
      ynRole: "代持人（自然人），少数股权由 Dana Talangan 资金支持。",
      tsnRole: "TMN 30% 股东，同时向 TMN 借款 1.9 亿盾（含利息）。",
      bfRole: "实体，以技术入股 Primtek Seri B 49%（未缴现金）。"
    },

    notes: {
      nomineeStake: "少数代持股权 —— 资金来自 Dana Talangan（认股垫款）",
      primtekSeriA: "A 类股（BPIV 100% 持有，9 亿盾）",
      primtekSeriB: "B 类股：BPIV 51% + BF 49%（技术入股、未缴现）；原 10% 库存股已注销。",
      mcashNote: "BPIV 持有可转债（CB），非直接股东；股权由原始股东持有，其股本尚未缴足。",
      mvpInitial: "初始持股（对应实缴股份）",
      mvpOther: "其他股东",
      mvpOwnershipNote: "估值上升后经济持股为 64.71%；70% 为对应实缴股本的初始持股。",
      mvpInvNote: "初始投资；实缴口径 70%，估值后稀释至 64.71%。",
      tmnInvNote: "70% 股权；TSN 持 30%。",
      primtekInvNote: "A 类股，100%。",
      bviInvNote: "99.9% 股权（0.1% 代持）。",
      rajapremiLoanNote: "转贷营运资金；无应计利息。",
      bviLoanNote: "营运资金贷款，有应计利息。",
      mcashLoanNote: "含原 NST 通道转入 61,818 美元（2024 年结清）。",
      tmnLoanNote: "转贷资金，有应计利息。",
      wellgrowNote: "海外应收；2025 年 12 月已核销。",
      primtekLoanNote: "贸易/营运资金贷款。",
      mtplLoanNote: "LP 式直接出资；计息。",
      wintekLoanNote: "由 Prosinido 集团转贷；计息。"
    },

    desc: {
      bpivDesc: "BPIV 是集团的核心投资公司，资金由 MTPL 以贷款方式直接提供（LP 模式）。它持有 MVP、TMN、Primtek、BVI 的股权，并向 Rajapremi、Mcash、TMN 等提供关联贷款。截至 2025 年 12 月已资不抵债：净资产为负 110 亿盾，主要来自 33.8 亿盾应收核销及对 MTPL 的累计利息。",
      proshoDesc: "Prosinido（Prosindo）是顶层控股公司，由联合创始人 YSX 与 BVI 离岸公司 PSI 各持 50%。它持有 Wintek 99.9% 的股权。超出实缴股本的资金由 PSI 以无息贷款提供。",
      wintekDesc: "Wintek Investama Indonesia（品牌 Rajapay）是中间控股公司，由 Prosinido 持股 99.9%。它持有 BPIV 99% 的股权，并已转贷给 BPIV（截至 2025 年 12 月本金 9.9 亿盾 + 应计利息 2.0 亿盾）。",
      mvpDesc: "MVP（PT Mega Value Prosperindo）是投资载体。BPIV 初始持股 70%（对应实缴股本），估值上升后稀释至 64.71%。唯一投资为 Rajapremi 99.99%（20 亿盾）。自 2018 年起休眠。",
      bviDesc: "BVI（PT Batavia Visi Inovasi）以 B-Startup 为运营品牌，提供写字楼管理与孵化服务，是集团唯一稳定产生现金流的运营公司，每年管理费收入 1.15–4.26 亿盾。它欠 BPIV 15.1 亿盾 + 利息 5.7 亿盾。",
      rajapremiDesc: "Rajapremi（PT Rajapremi Dot Com）经营线上佣金业务，由 MVP 持股 99.99%。收入从 2017 年峰值 3.42 亿盾降至 2025 年前 10 月约 0.23 亿盾。它欠 BPIV 18.3 亿盾、欠 BVI 7.6 亿盾。",
      tmnDesc: "TMN（PT Teknomedia Mitra Nusantara）由 BPIV 持股 70%、TSN 持股 30%，已休眠。TSN 作为 30% 股东同时向 TMN 借款 1.9 亿盾（含利息 0.31 亿盾）。TMN 欠 BPIV 9.7 亿盾 + 利息 2.5 亿盾。",
      primtekDesc: "Primtek（PT Primatama Teknologi Solusindo）是 IT 服务公司。A 类股（9 亿盾）由 BPIV 100% 持有；B 类股（8.65 亿盾）由 BPIV 51% / BF 49% 分持，BF 以技术入股（未缴现金）。原 10% 库存股已注销。2021 年后收入骤降，2022 年起为零。",
      mcashDesc: "Mcash（PT Mobile Cash Indonesia）由 BPIV 以可转债（CB）方式投资，非直接股东。股权仍由原始股东持有，其股本尚未缴足。Mcash 欠 BPIV 14.3 亿盾（含原 NST 通道转入的 61,818 美元）。MainDulu 合资方为 Lyto/Indofun。"
    },

    auth: {
      loginTitle: "登录以继续",
      username: "用户名",
      password: "密码",
      signIn: "登录",
      error: "用户名或密码错误",
      logout: "退出登录",
      userMgmt: "用户管理",
      welcome: "欢迎",
      admin: "管理员",
      viewer: "查看者",
      createUser: "创建新用户",
      usernameLabel: "用户名",
      nameLabel: "显示名",
      passLabel: "密码",
      roleLabel: "角色",
      createBtn: "创建",
      changePw: "修改密码",
      newPw: "新密码",
      updateBtn: "更新",
      delete: "删除",
      userList: "用户列表",
      cannotDeleteAdmin: "无法删除管理员账户",
      userExists: "用户名已存在",
      pwUpdated: "密码已更新",
      userCreated: "用户已创建",
      confirmDelete: "确认删除该用户？"
    },
    footer: {
      dataSource: "来源：内部台账（Financial Report 2013–2025，2025 年 10 月）及 2025 年年报。",
      disclaimer: "内部管理信息，未经审计，不对外分发。"
    }
  },

  id: {
    appTitle: "Sistem Informasi Grup BPIV",
    appSubtitle: "Dashboard Investasi & Keuangan",
    asOf: "Per",
    currencyNote: "Semua jumlah dalam IDR kecuali disebutkan lain",
    annualAsOf: "Neraca tahunan per 31 Des 2025",

    nav: {
      dashboard: "Dashboard",
      structure: "Struktur Grup",
      companies: "Perusahaan Portofolio",
      about: "Tentang"
    },

    lang: {
      en: "English",
      zh: "中文",
      id: "Bahasa Indonesia"
    },

    dashboard: {
      title: "Dashboard Grup",
      kpi: {
        netEquity: "Ekuitas Bersih BPIV (Des-25)",
        totalDebt: "Total Hutang ke MTPL (termasuk bunga)",
        portfolio: "Portofolio Investasi Ekuitas",
        workingCapital: "Modal Kerja (31 Des-25)",
        operatingRevenue: "Pendapatan Grup 2025* (10 bln)",
        writeOff: "Piutang Dihapusbukukan (2025)"
      },
      kpiUnit: { bn: "miliar", m: "juta" },
      revenueChart: {
        title: "Pendapatan Grup per Perusahaan (IDR)",
        subtext: "*2025 = Jan–Okt YTD",
        primtek: "Primtek",
        bvi: "BVI (B-Startup)",
        rajapremi: "Rajapremi",
        mvp: "MVP",
        mcash: "Mcash",
        tmn: "TMN"
      },
      structureTitle: "Struktur Kepemilikan & Aliran Dana",
      structureNote: "Garis penuh = kepemilikan saham; garis putus oranye = pinjaman antar perusahaan. YSX dan PSI tidak memiliki hubungan dengan MTPL. MTPL hanya meminjamkan langsung ke BPIV. YN adalah nominee (Dana Talangan).",
      offshoreNote: "Kendaraan shell luar negeri (Wellgrow, NST, EVF) sudah nonaktif dan dikeluarkan dari struktur; dananya sudah ada di pembukuan BPIV.",
      statusTitle: "Status Portofolio",
      status: {
        active: "Aktif",
        shrinking: "Menurun",
        dormant: "Nonaktif",
        distressed: "Bermasalah",
        holding: "Holding"
      },
      intercoTitle: "Piutang Antar Perusahaan BPIV (31 Okt-25)",
      intercoNote: "Piutang dari perusahaan portofolio; Wellgrow sudah dihapusbukukan Des-25.",
      riskTitle: "Penilaian Risiko",
      riskDesc: "BPIV sudah insolvent. Total utang eksternal Rp19,58 miliar (pokok Rp15,75 miliar + bunga akrual Rp3,84 miliar) terhadap ekuitas negatif Rp11,04 miliar. Kas di tangan hanya Rp4,5 juta. Perusahaan tidak dapat membayar utang dari operasi; pendapatan operasional seluruhnya dari BVI (Rp115–426 juta/tahun), tidak cukup menutup bunga akrual Rp3,64 miliar ke MTPL. Penghapusbukuan Rp3,38 miliar pada 2025 mencerminkan memburuknya kelayakan piutang antar perusahaan.",
      debtBreakdownTitle: "Struktur Utang: Pokok vs Bunga Akrual",
      solvencyTitle: "Metrik Solvabilitas",
      equityInvTitle: "Investasi Ekuitas (BPIV → Portofolio)",
      receivablesDetailTitle: "Piutang Pinjaman per Perusahaan",
      payablesDetailTitle: "Hutang kepada Pemberi Pinjaman",
      dateCol: "Tahun",
      principalCol: "Pokok",
      interestCol: "Bunga Akrual",
      totalCol: "Total",
      amountCol: "Jumlah",
      drawdownTitle: "Jadwal Penarikan",
      totalRow: "Total",
      nodeMtpl: "LP · pemberi pinjaman langsung ke BPIV",
      nodeYsx: "Co-founder · 50%",
      nodePsi: "50% · pendana utama · tanpa bunga"
    },

    company: {
      title: "Detail Perusahaan",
      overview: "Ikhtisar",
      ownership: "Kepemilikan",
      financials: "Posisi Keuangan",
      interco: "Saldo Antar Perusahaan",
      history: "Riwayat Pendapatan",
      noHistory: "Tidak ada riwayat pendapatan operasional",
      shareCapital: "Modal Disetor",
      status: "Status",
      type: "Tipe",
      assets: "Total Aset",
      liabilities: "Total Kewajiban",
      equity: "Ekuitas",
      netIncome: "Laba Bersih (TA 2025)",
      receivablesFrom: "Piutang dari",
      payablesTo: "Hutang ke",
      interest: "Bunga Akrual",
      principal: "Pokok",
      total: "Total",
      usdPortion: "termasuk USD",
      writtenOff: "dihapusbukukan",
      nomineeStake: "nominee (Dana Talangan)",
      investsIn: "Investasi pada",
      pctHeld: "Kepemilikan",
      description: "Deskripsi",
      backToDashboard: "← Kembali ke Dashboard",
      legalName: "Nama Hukum"
    },

    types: {
      investmentCo: "Investasi Holding",
      managementCo: "Manajemen / Holding Atas",
      holdingCo: "Investasi Holding",
      investmentVehicle: "Kendaraan Investasi",
      operatingCo: "Perusahaan Operasional",
      cbInvestment: "Investasi Konversi (CB)"
    },

    roles: {
      mtplRole: "LP / Pendana — meminjamkan langsung ke BPIV",
      ysxNote: "Co-founder (orang pribadi). Pemegang 50% saham Prosindo.",
      psiNote: "Perusahaan lepas pantai BVI. Pemegang 50% saham Prosindo dan pendana utama. Memberikan pinjaman tanpa bunga ke Prosindo dan Wintek; pinjaman ke NST kemudian dipindahkan seluruhnya ke pembukuan BPIV.",
      ynRole: "Pemegang nominee (orang pribadi). Saham minoritas dibiayai Dana Talangan.",
      tsnRole: "Pemegang 30% saham TMN; juga peminjam dari TMN (Rp190jt + bunga).",
      bfRole: "Entitas pemegang 49% Seri B Primtek sebagai in-kind (teknologi, tanpa tunai)."
    },

    notes: {
      nomineeStake: "Saham nominee minoritas — dana dari Dana Talangan (uang muka pembelian saham)",
      primtekSeriA: "Saham Seri A (100% dimiliki BPIV, Rp900jt)",
      primtekSeriB: "Seri B: BPIV 51% + BF 49% (teknologi in-kind, belum disetor). Treasury stock 10% yang lama telah dibatalkan.",
      mcashNote: "BPIV memegang convertible note (CB), bukan saham. Ekuitas dimilih oleh pemegang saham lama dengan modal belum disetor penuh.",
      mvpInitial: "Kepemilikan awal (saham disetor)",
      mvpOther: "Pemegang saham lain",
      mvpOwnershipNote: "Kepemilikan ekonomis menjadi 64,71% setelah kenaikan valuasi; 70% sesuai modal disetor.",
      mvpInvNote: "Investasi awal; basis disetor 70%, terdilusi jadi 64,71% pasca-valuasi.",
      tmnInvNote: "Ekuitas 70%; TSN memegang 30%.",
      primtekInvNote: "Saham Seri A, 100%.",
      bviInvNote: "Ekuitas 99,9% (0,1% nominee).",
      rajapremiLoanNote: "Modal kerja yang disalurkan ulang; tanpa bunga akrual.",
      bviLoanNote: "Pinjaman modal kerja dengan bunga akrual.",
      mcashLoanNote: "Termasuk USD 61.818 dari saluran NST sebelumnya (diselesaikan 2024).",
      tmnLoanNote: "Modal yang disalurkan ulang dengan bunga akrual.",
      wellgrowNote: "Piutang luar negeri; dihapusbukukan Des-2025.",
      primtekLoanNote: "Pinjaman perdagangan / modal kerja.",
      mtplLoanNote: "Pendanaan langsung model LP; berbunga.",
      wintekLoanNote: "Disalurkan ulang oleh grup Prosindo; berbunga."
    },

    desc: {
      bpivDesc: "BPIV adalah perusahaan investasi pusat grup, didanai langsung oleh MTPL sebagai pemberi pinjaman (model LP). Ia memegang ekuitas di MVP, TMN, Primtek, dan BVI, serta memberikan pinjaman antar perusahaan kepada Rajapremi, Mcash, TMN, dan lainnya. Per Des 2025 sudah insolvable: ekuitas negatif Rp11,0 miliar, akibat penghapusbukuan piutang Rp3,38 miliar dan bunga akumulasi ke MTPL.",
      proshoDesc: "Prosinido (Prosindo) adalah perusahaan holding puncak, dimiliki 50/50 oleh co-founder YSX dan perusahaan lepas pantai BVI PSI. Ia memegang 99,9% Wintek. Dana di luar modal disetor berasal dari pinjaman tanpa bunga dari PSI.",
      wintekDesc: "Wintek Investama Indonesia (merek Rajapay) adalah perusahaan holding perantara, 99,9% dimiliki Prosindo. Ia memegang 99% BPIV dan telah menyalurkan pinjaman ke BPIV (pokok Rp0,98 miliar + bunga akrual Rp0,15 miliar per Okt-25).",
      mvpDesc: "MVP (PT Mega Value Prosperindo) adalah kendaraan investasi. BPIV awalnya memegang 70% (berdasarkan modal disetor), terdilusi menjadi 64,71% setelah kenaikan valuasi. Satu-satunya investasinya adalah 99,99% Rajapremi (Rp2,0 miliar). Sudah nonaktif sejak 2018.",
      bviDesc: "BVI (PT Batavia Visi Inovasi) beroperasi di bawah merek B-Startup, menyediakan jasa manajemen gedung kantor dan inkubasi. Ia adalah satu-satunya perusahaan operasional grup yang tetap menghasilkan kas stabil, dengan pendapatan fee Rp115–426 juta per tahun. Ia berhutang ke BPIV Rp1,51 miliar + bunga Rp0,57 miliar.",
      rajapremiDesc: "Rajapremi (PT Rajapremi Dot Com) menjalankan bisnis komisi online, 99,99% dimiliki MVP. Pendapatan menurun dari puncak Rp342 miliar (2017) menjadi sekitar Rp23 miliar (2025 YTD). Ia berhutang ke BPIV Rp1,83 miliar dan ke BVI Rp0,76 miliar.",
      tmnDesc: "TMN (PT Teknomedia Mitra Nusantara) 70% dimiliki BPIV dan 30% oleh TSN. Sudah nonaktif. TSN sebagai pemegang 30% juga meminjam Rp190 juta dari TMN (plus bunga Rp30,8 juta). TMN berhutang ke BPIV Rp0,97 miliar + bunga Rp0,25 miliar.",
      primtekDesc: "Primtek (PT Primatama Teknologi Solusindo) adalah perusahaan jasa TI. Saham Seri A (Rp900 juta) 100% dimiliki BPIV. Seri B (Rp865 juta) dibagi BPIV 51% / BF 49%, dengan BF menyetor teknologi secara in-kind (tanpa tunai). Treasury stock 10% yang lama telah dibatalkan. Pendapatan jatuh drastis setelah 2021 dan nol sejak 2022.",
      mcashDesc: "Mcash (PT Mobile Cash Indonesia) dimiliki BPIV melalui convertible note (CB), bukan sebagai pemegang saham langsung. Ekuitas tetap di tangan pemegang saham lama dengan modal belum disetor penuh. Mcash berhutang ke BPIV Rp1,43 miliar (termasuk USD 61.818 dari saluran NST sebelumnya). JV MainDulu dengan Lyto/Indofun."
    },

    auth: {
      loginTitle: "Masuk untuk melanjutkan",
      username: "Nama pengguna",
      password: "Kata sandi",
      signIn: "Masuk",
      error: "Nama pengguna atau kata sandi salah",
      logout: "Keluar",
      userMgmt: "Manajemen Pengguna",
      welcome: "Selamat datang",
      admin: "Administrator",
      viewer: "Penonton",
      createUser: "Buat Pengguna Baru",
      usernameLabel: "Nama pengguna",
      nameLabel: "Nama tampilan",
      passLabel: "Kata sandi",
      roleLabel: "Peran",
      createBtn: "Buat",
      changePw: "Ubah Kata Sandi",
      newPw: "Kata sandi baru",
      updateBtn: "Perbarui",
      delete: "Hapus",
      userList: "Daftar Pengguna",
      cannotDeleteAdmin: "Tidak dapat menghapus akun admin",
      userExists: "Nama pengguna sudah ada",
      pwUpdated: "Kata sandi diperbarui",
      userCreated: "Pengguna dibuat",
      confirmDelete: "Hapus pengguna ini?"
    },
    footer: {
      dataSource: "Sumber: Buku besar internal (Financial Report 2013–2025, Okt 2025) dan laporan tahunan 2025.",
      disclaimer: "Informasi manajemen internal. Belum diaudit, tidak untuk distribusi luar."
    }
  }
};
