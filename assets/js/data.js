// BPIV Group — Financial data (as of 31 Oct 2025; annual BS as of 31 Dec 2025)
// Source: Financial Report 2013-2025 - Oktober 2025.xlsx; LK 2025 PDFs (BPIV/Prosindo/Wintek)
window.BPIV_DATA = {
  meta: {
    asOf: "2025-12-31",
    annualAsOf: "2025-12-31",
    currency: "IDR",
    projectionUntil: "2026-12-31"
  },

  companies: {
    bpiv: {
      slug: "bpiv",
      legalNames: {
        en: "PT Batavia Prosperindo Investama",
        zh: "PT Batavia Prosperindo Investama（BPIV）",
        id: "PT Batavia Prosperindo Investama"
      },
      shortName: "BPIV",
      typeKey: "investmentCo",
      status: "distressed",
      ownership: [
        { holder: "wintek", pct: 0.99 },
        { holder: "yn_nominee", pct: 0.01, noteKey: "nomineeStake" }
      ],
      shareCapital: 100000000,
      bs: {
        assets: 8544795000,
        liabilities: 19583987825,
        equity: -11039192825,
        netIncome: -3740827661
      },
      bsDetail: [
        { section: "assets" },
        { label: "Cash and cash equivalents", amount: 4502520 },
        { label: "Related party receivables", amount: 3686642480 },
        { label: "Investment in subsidiaries", amount: 4849900000 },
        { label: "Fixed assets, net", amount: 3750000 },
        { label: "TOTAL ASSETS", amount: 8544795000, total: true },
        { section: "liabilities" },
        { label: "Interest payable", amount: 3835310433 },
        { label: "Related party payables", amount: 15748677392 },
        { label: "TOTAL LIABILITIES", amount: 19583987825, total: true },
        { section: "equity" },
        { label: "Share capital", amount: 100000000 },
        { label: "Accumulated deficit", amount: -11139192825 },
        { label: "TOTAL EQUITY", amount: -11039192825, total: true }
      ],
      isDetail: [
        { section: "revenue" },
        { label: "Revenue", amount: 70000000 },
        { section: "expenses" },
        { label: "Salaries and benefits", amount: 117872910 },
        { label: "General and administrative", amount: 7338232 },
        { label: "Operating loss", amount: -55211142, subtotal: true },
        { section: "other" },
        { label: "Interest income", amount: 50515 },
        { label: "Other income", amount: 4700000 },
        { label: "Interest expense", amount: -313710260 },
        { label: "Receivable write-off", amount: -3376656774 },
        { label: "NET LOSS", amount: -3740827661, total: true }
      ],
      cash: 4502520,
      workingCapital: -11039192825,
      writeOff2025: 3376656774,
      equityInvestments: [
        { co: "mvp", amount: 2800000000, date: "2015", noteKey: "mvpInvNote" },
        { co: "tmn", amount: 1050000000, date: "2016", noteKey: "tmnInvNote" },
        { co: "primtek", amount: 900000000, date: "2016", noteKey: "primtekInvNote" },
        { co: "bvi", amount: 99900000, date: "2015", noteKey: "bviInvNote" }
      ],
      receivables: [
        { co: "rajapremi", principal: 1833706306, interest: 0, date: "2018", noteKey: "rajapremiLoanNote",
          drawdowns: [
            { year: 2018, amount: 165851978 }, { year: 2019, amount: 353500000 },
            { year: 2020, amount: 383600000 }, { year: 2021, amount: 423254328 },
            { year: 2022, amount: 194000000 }, { year: 2023, amount: 143000000 },
            { year: 2024, amount: 101700000 }, { year: 2025, amount: 68800000 }
          ] },
        { co: "bvi", principal: 1505194160, interest: 574555788, date: "2015", noteKey: "bviLoanNote",
          drawdowns: [
            { year: 2015, amount: 128642000 }, { year: 2016, amount: 594747160 },
            { year: 2017, amount: 299500000 }, { year: 2018, amount: 122100000 },
            { year: 2019, amount: 138200000 }, { year: 2023, amount: 145000000 },
            { year: 2024, amount: -80000000 }, { year: 2025, amount: 157005000 }
          ] },
        { co: "mcash", principal: 1463011566, interest: 0, usd: 61818, date: "2017", noteKey: "mcashLoanNote",
          drawdowns: [
            { year: 2024, amount: 1431237114, note: "incl. USD 61,818 from former NST channel" }
          ] },
        { co: "tmn", principal: 970500000, interest: 250781055, date: "2016", noteKey: "tmnLoanNote",
          drawdowns: [
            { year: 2016, amount: 600000000 }, { year: 2017, amount: 370500000 }
          ] },
        { co: "wellgrow", principal: 974919660, interest: 0, date: "2015", writtenOff: true, noteKey: "wellgrowNote",
          drawdowns: [
            { year: 2024, amount: 974919660 }
          ] },
        { co: "primtek", principal: 342442014, interest: 0, date: "2017", noteKey: "primtekLoanNote",
          drawdowns: [
            { year: 2024, amount: 342442014 }
          ] }
      ],
      payables: [
        { co: "mtpl", principal: 14763000000, interest: 3637273993, date: "2015", noteKey: "mtplLoanNote",
          drawdowns: [
            { year: 2015, amount: 4635234438 }, { year: 2016, amount: 1584000000 },
            { year: 2017, amount: 1890000000 }, { year: 2018, amount: 538000000 },
            { year: 2019, amount: 950000000 }, { year: 2020, amount: 450000000 },
            { year: 2021, amount: 996000000 }, { year: 2022, amount: 660000000 },
            { year: 2023, amount: -8000000 }, { year: 2024, amount: 3067765562 }
          ] },
        { co: "wintek", principal: 985677392, interest: 198036440, date: "2016", noteKey: "wintekLoanNote",
          drawdowns: [
            { year: 2014, amount: 20000000 }, { year: 2015, amount: 311324139 },
            { year: 2018, amount: 80000000 }, { year: 2023, amount: 73925293 },
            { year: 2024, amount: 285427960 }, { year: 2025, amount: 210000000 }
          ] }
      ],
      risk: {
        debtToEquity: -1.77,
        currentRatio: 0.30,
        netDebt: 15842907392,
        interestBurden: 3637273993
      },
      descriptionKey: "bpivDesc"
    },

    prosho: {
      slug: "prosho",
      legalNames: {
        en: "PT Prosindo Manajemen",
        zh: "PT Prosindo Manajemen",
        id: "PT Prosindo Manajemen"
      },
      shortName: "Prosindo",
      shortNameOrig: "Prosindo",
      typeKey: "managementCo",
      status: "holding",
      ownership: [
        { holder: "ysx", pct: 0.50 },
        { holder: "psi", pct: 0.50 }
      ],
      shareCapital: 2500000000,
      bs: {
        assets: 2576287667,
        liabilities: 424195451,
        equity: 2152092216,
        netIncome: null
      },
      bsDetail: [
        { section: "assets" },
        { label: "Cash and cash equivalents", amount: 14397216 },
        { label: "Land and building", amount: 537795000 },
        { label: "Related party receivables", amount: 1500000000 },
        { label: "Other receivables", amount: 424195451 },
        { label: "Investment in subsidiary (Wintek)", amount: 99900000 },
        { label: "TOTAL ASSETS", amount: 2576287667, total: true },
        { section: "liabilities" },
        { label: "Other payables", amount: 424195451 },
        { label: "TOTAL LIABILITIES", amount: 424195451, total: true },
        { section: "equity" },
        { label: "Share capital (2,500 shares @ Rp1m)", amount: 2500000000 },
        { label: "Retained earnings / (loss)", amount: -347907784 },
        { label: "TOTAL EQUITY", amount: 2152092216, total: true }
      ],
      isDetail: null,
      keyItems: [
        { labelKey: "investInSubs", amount: 99900000, note: "Wintek" },
        { labelKey: "dueFromRelated", amount: 1500000000 },
        { labelKey: "landBuilding", amount: 537795000 }
      ],
      investsIn: [
        { co: "wintek", pct: 0.999, amount: 99900000 }
      ],
      descriptionKey: "proshoDesc"
    },

    wintek: {
      slug: "wintek",
      legalNames: {
        en: "PT Wintek Investama Indonesia (Rajapay)",
        zh: "PT Wintek Investama Indonesia（Rajapay）",
        id: "PT Wintek Investama Indonesia (Rajapay)"
      },
      shortName: "Wintek",
      typeKey: "holdingCo",
      status: "holding",
      ownership: [
        { holder: "prosho", pct: 0.999 },
        { holder: "yn_nominee", pct: 0.001, noteKey: "nomineeStake" }
      ],
      shareCapital: 100000000,
      bs: {
        assets: 1259549167,
        liabilities: 559623411,
        equity: 699925756,
        netIncome: -67473740
      },
      bsDetail: [
        { section: "assets" },
        { label: "Cash and cash equivalents", amount: 12694668 },
        { label: "Related party receivables (principal)", amount: 995747391 },
        { label: "Interest receivable from BPIV", amount: 152107107 },
        { label: "Investment in subsidiary (BPIV)", amount: 99000000 },
        { label: "TOTAL ASSETS", amount: 1259549167, total: true },
        { section: "liabilities" },
        { label: "Related party payables", amount: 559623411 },
        { label: "TOTAL LIABILITIES", amount: 559623411, total: true },
        { section: "equity" },
        { label: "Share capital", amount: 100000000 },
        { label: "Retained earnings", amount: 599925756 },
        { label: "TOTAL EQUITY", amount: 699925756, total: true }
      ],
      isDetail: null,
      investsIn: [
        { co: "bpiv", pct: 0.99, amount: 99000000 }
      ],
      receivables: [
        { co: "bpiv", principal: 995747391, interest: 152107107, date: "2016" }
      ],
      descriptionKey: "wintekDesc"
    },

    mvp: {
      slug: "mvp",
      legalNames: {
        en: "PT Mega Value Prosperindo",
        zh: "PT Mega Value Prosperindo",
        id: "PT Mega Value Prosperindo"
      },
      shortName: "MVP",
      typeKey: "investmentVehicle",
      status: "dormant",
      ownership: [
        { holder: "bpiv", pct: 0.70, noteKey: "mvpInitial" },
        { holder: "other", pct: 0.30, noteKey: "mvpOther" }
      ],
      ownershipNoteKey: "mvpOwnershipNote",
      shareCapital: 3126700000,
      bsDetail: [
        { section: "assets" },
        { label: "Investment in Rajapremi", amount: 1999900000 },
        { label: "Receivables from Rajapremi", amount: 11070348 },
        { label: "TOTAL ASSETS", amount: 2010970348, total: true },
        { section: "liabilities" },
        { label: "TOTAL LIABILITIES", amount: 0, total: true },
        { section: "equity" },
        { label: "Share capital", amount: 3126700000 },
        { label: "Additional paid-in capital", amount: 3070593000 },
        { label: "Accumulated deficit", amount: -4186322652 },
        { label: "TOTAL EQUITY", amount: 2010970348, total: true }
      ],
      isDetail: [
        { section: "revenue" },
        { label: "Management fee (cumulative)", amount: 160000000 },
        { label: "Interest income (cumulative)", amount: 142385858 },
        { label: "Miscellaneous income (cumulative)", amount: 39500000 },
        { section: "expenses" },
        { label: "Salaries (cumulative)", amount: 2481369860 },
        { label: "Marketing (cumulative)", amount: 411031995 },
        { label: "Adm & general (cumulative)", amount: 1241174351 },
        { label: "Management fee to BPIV (cumulative)", amount: 153500000 },
        { label: "Building rent (cumulative)", amount: 49500000 },
        { label: "NET DEFICIT (cumulative)", amount: -4186322652, total: true }
      ],
      investsIn: [
        { co: "rajapremi", pct: 0.9999, amount: 1999900000 }
      ],
      receivables: [
        { co: "rajapremi", principal: 11070349, interest: 0, date: "2018" }
      ],
      descriptionKey: "mvpDesc"
    },

    bvi: {
      slug: "bvi",
      legalNames: {
        en: "PT Batavia Visi Inovasi (brand: B-Startup)",
        zh: "PT Batavia Visi Inovasi（品牌：B-Startup）",
        id: "PT Batavia Visi Inovasi (brand: B-Startup)"
      },
      shortName: "BVI",
      typeKey: "operatingCo",
      status: "active",
      ownership: [
        { holder: "bpiv", pct: 0.999 },
        { holder: "yn_nominee", pct: 0.001, noteKey: "nomineeStake" }
      ],
      shareCapital: 100000000,
      bsDetail: [
        { section: "assets" },
        { label: "Cash and cash equivalents", amount: 3132084 },
        { label: "Receivables", amount: 793400000 },
        { label: "Office equipment, net", amount: 16726000 },
        { label: "TOTAL ASSETS", amount: 813258084, total: true },
        { section: "liabilities" },
        { label: "Due to BPIV (principal + interest)", amount: 2079749948 },
        { label: "TOTAL LIABILITIES", amount: 2079749948, total: true },
        { section: "equity" },
        { label: "Share capital", amount: 100000000 },
        { label: "Accumulated deficit", amount: -1366491864 },
        { label: "TOTAL EQUITY", amount: -1266491864, total: true }
      ],
      isDetail: [
        { section: "revenue" },
        { label: "Management fee (YTD Oct-25)", amount: 114800000 },
        { label: "Interest income (YTD Oct-25)", amount: 38952 },
        { section: "expenses" },
        { label: "Salaries (YTD Oct-25)", amount: 28643389 },
        { label: "Building management fee (YTD Oct-25)", amount: 78111000 },
        { label: "Adm & general (YTD Oct-25)", amount: 16749983 },
        { label: "NET INCOME (YTD Oct-25)", amount: -870420, total: true }
      ],
      receivables: [
        { co: "rajapremi", principal: 764000000, interest: 0, date: "2019" },
        { co: "greenland", principal: 29400000, interest: 0, date: "2020" }
      ],
      payables: [
        { co: "bpiv", principal: 1505194160, interest: 574555788, date: "2017" }
      ],
      descriptionKey: "bviDesc"
    },

    rajapremi: {
      slug: "rajapremi",
      legalNames: {
        en: "PT Rajapremi Dot Com",
        zh: "PT Rajapremi Dot Com",
        id: "PT Rajapremi Dot Com"
      },
      shortName: "Rajapremi",
      typeKey: "operatingCo",
      status: "shrinking",
      ownership: [
        { holder: "mvp", pct: 0.9999 },
        { holder: "yn_nominee", pct: 0.0001, noteKey: "nomineeStake" }
      ],
      shareCapital: 2000000000,
      bsDetail: [
        { section: "assets" },
        { label: "Cash and cash equivalents", amount: 10803015 },
        { label: "Receivables from insurance", amount: 8655051 },
        { label: "Office equipment, net", amount: 22441900 },
        { label: "TOTAL ASSETS", amount: 41899966, total: true },
        { section: "liabilities" },
        { label: "Due to BPIV", amount: 1833706306 },
        { label: "Due to BVI (rental)", amount: 754668952 },
        { label: "Due to BVI (management fee)", amount: 764000000 },
        { label: "Due to MVP", amount: 11070349 },
        { label: "TOTAL LIABILITIES", amount: 3363445607, total: true },
        { section: "equity" },
        { label: "Share capital", amount: 2000000000 },
        { label: "Accumulated deficit", amount: -5321545641 },
        { label: "TOTAL EQUITY", amount: -3321545641, total: true }
      ],
      isDetail: [
        { section: "revenue" },
        { label: "Commission (YTD Oct-25)", amount: 23051991 },
        { label: "Interest income (YTD Oct-25)", amount: 11870 },
        { section: "expenses" },
        { label: "Salaries (YTD Oct-25)", amount: 49056760 },
        { label: "Email/web maintenance (YTD Oct-25)", amount: 24312495 },
        { label: "Management fee to BVI (YTD Oct-25)", amount: 70000000 },
        { label: "Adm & general (YTD Oct-25)", amount: 16775354 },
        { label: "NET LOSS (YTD Oct-25)", amount: -137101748, total: true }
      ],
      payables: [
        { co: "bpiv", principal: 1833706306, interest: 0, date: "2017" },
        { co: "bvi", principal: 764000000, interest: 0, date: "2019" },
        { co: "mvp", principal: 11070349, interest: 0, date: "2018" }
      ],
      descriptionKey: "rajapremiDesc"
    },

    tmn: {
      slug: "tmn",
      legalNames: {
        en: "PT Teknomedia Mitra Nusantara",
        zh: "PT Teknomedia Mitra Nusantara",
        id: "PT Teknomedia Mitra Nusantara"
      },
      shortName: "TMN",
      typeKey: "operatingCo",
      status: "dormant",
      ownership: [
        { holder: "bpiv", pct: 0.70 },
        { holder: "tsn", pct: 0.30 }
      ],
      shareCapital: 1500000000,
      receivables: [
        { co: "tsn", principal: 190000000, interest: 30822222, date: "2017" }
      ],
      payables: [
        { co: "bpiv", principal: 970500000, interest: 250781055, date: "2016" }
      ],
      descriptionKey: "tmnDesc"
    },

    primtek: {
      slug: "primtek",
      legalNames: {
        en: "PT Primatama Teknologi Solusindo",
        zh: "PT Primatama Teknologi Solusindo",
        id: "PT Primatama Teknologi Solusindo"
      },
      shortName: "Primtek",
      typeKey: "operatingCo",
      status: "dormant",
      ownership: [
        { holder: "bpiv", pct: 1.0, noteKey: "primtekSeriA" },
        { holder: "bf", pct: 0.49, noteKey: "primtekSeriB" }
      ],
      shareCapital: 900000000,
      payables: [
        { co: "bpiv", principal: 342442014, interest: 0, date: "2017" }
      ],
      descriptionKey: "primtekDesc"
    },

    mcash: {
      slug: "mcash",
      legalNames: {
        en: "PT Mobile Cash Indonesia",
        zh: "PT Mobile Cash Indonesia",
        id: "PT Mobile Cash Indonesia"
      },
      shortName: "Mcash",
      typeKey: "cbInvestment",
      status: "dormant",
      ownership: [
        { holder: "originalShareholders", pct: 1.0, noteKey: "mcashNote" }
      ],
      shareCapital: 903656630,
      payables: [
        { co: "bpiv", principal: 1463011566, interest: 0, usd: 61818, date: "2017" }
      ],
      descriptionKey: "mcashDesc"
    }
  },

  revenue: {
    years: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, "2025*"],
    series: {
      primtek:   [0, 0, 0, 0, 1023901249, 1641774595, 1517571264, 677077696, 162061347, 162045245, 3698, 0, 0],
      bvi:       [0, 0, 330802, 114762767, 232576348, 183045322, 116307172, 285325672, 224485332, 356921852, 425662462, 361674613, 114838952],
      rajapremi: [0, 0, 72830935, 340644733, 341672970, 98130584, 81454640, 58130998, 38243746, 28226355, 24194134, 21485179, 23063861],
      mvp:       [0, 0, 215765340, 81282662, 40225372, 4612484, 0, 0, 0, 0, 0, 0, 0],
      mcash:     [0, 0, 0, 0, 3458511, 616932, 1583757, 3932134, 4899234, 1193516, 772600, 110193911, 0],
      tmn:       [0, 0, 0, 615066, 46965, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  },

  retiredEntities: {
    en: "Wellgrow, NST, EVF — offshore shell vehicles, deactivated; funds have been moved to BPIV books.",
    zh: "Wellgrow、NST、EVF —— 已失效的海外壳工具，资金已转入 BPIV 账上。",
    id: "Wellgrow, NST, EVF — kendaraan shell luar negeri yang sudah nonaktif; dana sudah dipindah ke pembukuan BPIV."
  }
};
