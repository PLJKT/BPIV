// BPIV Group — Financial data (as of 31 Oct 2025; annual BS as of 31 Dec 2025)
// Source: Financial Report 2013-2025 - Oktober 2025.xlsx; LK 2025 PDFs (BPIV/Prosidno/Wintek)
window.BPIV_DATA = {
  meta: {
    asOf: "2025-10-31",
    annualAsOf: "2025-12-31",
    currency: "IDR",
    projectionUntil: "2026-12-31"
  },

  // Ownership chain (legal structure)
  structure: {
    top: [
      { id: "ysx", name: "YSX", type: "person", noteKey: "ysxNote" },
      { id: "psi", name: "PSI", type: "offshore", noteKey: "psiNote" }
    ],
    // edges: [fromId, toId, pct, kind]  kind: equity | loan
    edges: [
      ["ysx", "prosho", 0.50, "equity"],
      ["psi", "prosho", 0.50, "equity"],
      ["prosho", "wintek", 0.999, "equity"],
      ["yn_nominee", "wintek", 0.001, "equity_nominee"],
      ["wintek", "bpiv", 0.99, "equity"],
      ["yn_nominee", "bpiv", 0.01, "equity_nominee"],
      ["mtpl", "bpiv", null, "loan"],
      ["wintek", "bpiv", null, "loan"],
      ["bpiv", "mvp", null, "equity"],
      ["bpiv", "bvi", 0.999, "equity"],
      ["yn_nominee", "bvi", 0.001, "equity_nominee"],
      ["bpiv", "tmn", 0.70, "equity"],
      ["tsn", "tmn", 0.30, "equity"],
      ["bpiv", "primtek", null, "equity"],
      ["bf", "primtek", 0.49, "equity_inkind"],
      ["mvp", "rajapremi", 0.9999, "equity"],
      ["yn_nominee", "rajapremi", 0.0001, "equity_nominee"]
    ],
    external: [
      { id: "mtpl", name: "MTPL", roleKey: "mtplRole" },
      { id: "yn_nominee", name: "YN", roleKey: "ynRole" },
      { id: "tsn", name: "TSN", roleKey: "tsnRole" },
      { id: "bf", name: "BF", roleKey: "bfRole" }
    ]
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
      statusKey: "statusDistressed",
      ownership: [
        { holder: "wintek", pct: 0.99 },
        { holder: "yn_nominee", pct: 0.01, noteKey: "nomineeStake" }
      ],
      shareCapital: 100000000,
      bs: {
        // Dec 2025 annual report
        assets: 8544795000,
        liabilities: 19583987825,
        equity: -11039192825,
        netIncome: -3740827661
      },
      investments: [
        { co: "mvp", amount: 2800000000 },
        { co: "tmn", amount: 1050000000 },
        { co: "primtek", amount: 900000000 },
        { co: "bvi", amount: 99900000 }
      ],
      receivables: [
        { co: "rajapremi", principal: 1833706306, interest: 0 },
        { co: "bvi", principal: 1505194160, interest: 574555788 },
        { co: "mcash", principal: 1463011566, interest: 0, usd: 61818 },
        { co: "tmn", principal: 970500000, interest: 250781055 },
        { co: "wellgrow", principal: 974919660, writtenOff: true },
        { co: "primtek", principal: 342442014, interest: 0 }
      ],
      payables: [
        { co: "mtpl", principal: 14763000000, interest: 3637273993 },
        { co: "wintek", principal: 980677392, interest: 149030232 }
      ],
      workingCapital: -7714694632,
      cash: 3637731,
      writeOff2025: 3376656774,
      descriptionKey: "bpivDesc"
    },

    prosho: {
      slug: "prosho",
      legalNames: {
        en: "PT Prosindo Manajemen",
        zh: "PT Prosindo Manajemen",
        id: "PT Prosindo Manajemen"
      },
      shortName: "Prosinido",
      shortNameOrig: "Prosindo",
      typeKey: "managementCo",
      status: "holding",
      statusKey: "statusHolding",
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
      keyItems: [
        { labelKey: "investInSubs", amount: 99900000, note: "Wintek" },
        { labelKey: "dueFromRelated", amount: 1500000000 },
        { labelKey: "landBuilding", amount: 537800000 }
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
      statusKey: "statusHolding",
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
      investsIn: [
        { co: "bpiv", pct: 0.99, amount: 99000000 }
      ],
      receivables: [
        { co: "bpiv", principal: 995747391, interest: 152107107 }
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
      statusKey: "statusDormant",
      ownership: [
        { holder: "bpiv", pct: 1.0 }
      ],
      shareCapital: 3126700000,
      investsIn: [
        { co: "rajapremi", pct: 0.9999, amount: 1999900000 }
      ],
      receivables: [
        { co: "rajapremi", principal: 11070349, interest: 0 }
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
      statusKey: "statusActive",
      ownership: [
        { holder: "bpiv", pct: 0.999 },
        { holder: "yn_nominee", pct: 0.001, noteKey: "nomineeStake" }
      ],
      shareCapital: 100000000,
      receivables: [
        { co: "rajapremi", principal: 764000000, interest: 0 },
        { co: "greenland", principal: 29400000, interest: 0 }
      ],
      payables: [
        { co: "bpiv", principal: 1505194160, interest: 574555788 }
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
      statusKey: "statusShrinking",
      ownership: [
        { holder: "mvp", pct: 0.9999 },
        { holder: "yn_nominee", pct: 0.0001, noteKey: "nomineeStake" }
      ],
      shareCapital: 2000000000,
      payables: [
        { co: "bpiv", principal: 1833706306, interest: 0 },
        { co: "bvi", principal: 764000000, interest: 0 },
        { co: "mvp", principal: 11070349, interest: 0 }
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
      statusKey: "statusDormant",
      ownership: [
        { holder: "bpiv", pct: 0.70 },
        { holder: "tsn", pct: 0.30 }
      ],
      shareCapital: 1500000000,
      receivables: [
        { co: "tsn", principal: 190000000, interest: 30822222 }
      ],
      payables: [
        { co: "bpiv", principal: 970500000, interest: 250781055 }
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
      statusKey: "statusDormant",
      ownership: [
        { holder: "bpiv", pct: 1.0, noteKey: "primtekSeriA" },
        { holder: "bf", pct: 0.49, noteKey: "primtekSeriB" }
      ],
      shareCapital: 900000000,
      payables: [
        { co: "bpiv", principal: 342442014, interest: 0 }
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
      statusKey: "statusDormant",
      ownership: [
        { holder: "originalShareholders", pct: 1.0, noteKey: "mcashNote" }
      ],
      shareCapital: 903656630,
      payables: [
        { co: "bpiv", principal: 1463011566, interest: 0, usd: 61818 }
      ],
      descriptionKey: "mcashDesc"
    }
  },

  // Group revenue by year (IDR). years: 2013..2025(Oct YTD)
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

  // Offshore shell tools (deactivated, excluded from structure)
  retiredEntities: {
    en: "Wellgrow, NST, EVF — offshore shell vehicles, deactivated; funds have been moved to BPIV books (NST↔Mcash USD channel settled in 2024, reclassified as receivable from BPIV; Wellgrow receivable written off in 2025).",
    zh: "Wellgrow、NST、EVF —— 已失效的海外壳工具，资金已转入 BPIV 账上（NST↔Mcash 的 USD 通道 2024 年结清并转为对 BPIV 应收；Wellgrow 应收 2025 年核销）。",
    id: "Wellgrow, NST, EVF — kendaraan shell luar negeri yang sudah nonaktif; dana sudah dipindah ke pembukuan BPIV (kanaI USD NST↔Mcash diselesaikan 2024, direklasifikasi sebagai piutang ke BPIV; piutang Wellgrow dihapusbukukan 2025)."
  }
};
