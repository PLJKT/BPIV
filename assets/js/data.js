// BPIV Group — Financial data (BS/IS as of 31 Jul 2026; intercompany balances per Loan Summary 31 Jul 2026)
// Source: Financial Report 2013-2025 - Desember 2025.xlsx; monthly reports per Juli 2026;
//         Loan Summary BPIV Group - Juli 2026.xlsx; Loan Table BPIV - July 2026.xlsx
window.BPIV_DATA = {
  meta: {
    asOf: "2026-07-31",
    annualAsOf: "2026-07-31",
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
        assets: 8570036473.04,
        liabilities: 19782612080.54,
        equity: -11212575607.4,
        netIncome: -173382782.6
      },
      bsDetail: [
        { section: "assets" },
        { label: "Cash and cash equivalents", amount: 2143993.09 },
        { label: "Cash advance – Rajapremi", amount: 1866506306 },
        { label: "Receivable – BVI", amount: 1505194160 },
        { label: "Receivable – Primtek", amount: 342442013.95 },
        { label: "Receivable from shareholder", amount: 100000 },
        { label: "Related party receivables", amount: 3714242479.95, subtotal: true },
        { label: "Investment in subsidiaries", amount: 4849900000 },
        { label: "Fixed assets, net", amount: 3750000 },
        { label: "TOTAL ASSETS", amount: 8570036473.04, total: true },
        { section: "liabilities" },
        { label: "Accrued interest – MTPL", amount: 3850767247.26 },
        { label: "Accrued interest – Wintek/Rajapay", amount: 163667441.28 },
        { label: "Due to MTPL", amount: 14763000000 },
        { label: "Due to Wintek/Rajapay", amount: 1005177392 },
        { label: "TOTAL LIABILITIES", amount: 19782612080.54, total: true },
        { section: "equity" },
        { label: "Share capital", amount: 100000000 },
        { label: "Retained earnings", amount: -11139192824.8 },
        { label: "Current year earnings (YTD)", amount: -173382782.6 },
        { label: "TOTAL EQUITY", amount: -11212575607.4, total: true }
      ],
      isDetail: [
        { section: "revenue" },
        { label: "Management fee", amount: 70000000 },
        { section: "expenses" },
        { label: "Salaries and benefits", amount: -70979391 },
        { label: "General and administrative", amount: -2830690 },
        { label: "Repair & maintenance", amount: -1186000 },
        { label: "Operating loss", amount: -4996081, subtotal: true },
        { section: "other" },
        { label: "Interest income (mutual fund)", amount: 17553.94 },
        { label: "Other revenue", amount: 10720000 },
        { label: "Interest expense – MTPL", amount: -167563921.26 },
        { label: "Interest expense – Wintek", amount: -11560334.28 },
        { label: "NET LOSS", amount: -173382782.6, total: true }
      ],
      cash: 2143993.09,
      workingCapital: -11212575607.4,
      writeOff2025: 3376656774,
      potentialWriteOffs: [
        { co: "bvi", principal: 1505194160, interest: 574555788, dormantSince: "2025-07", noteKey: "bviPwoNote" },
        { co: "primtek", principal: 342442014, interest: 0, dormantSince: "2026", noteKey: "primtekPwoNote" }
      ],
      equityInvestments: [
        { co: "mvp", amount: 2800000000, date: "2015", noteKey: "mvpInvNote" },
        { co: "tmn", amount: 1050000000, date: "2016", noteKey: "tmnInvNote" },
        { co: "primtek", amount: 900000000, date: "2017", noteKey: "primtekInvNote" },
        { co: "bvi", amount: 99900000, date: "2015", noteKey: "bviInvNote" }
      ],
      receivables: [
        { co: "rajapremi", principal: 1866506306, interest: 0, date: "2018", noteKey: "rajapremiLoanNote",
          drawdowns: [
            { year: "2018–2025", amount: 1843906306, note: "Accumulated through Dec-2025" },
            { year: "2026", amount: 22600000, note: "Jan–Jul YTD" }
          ] },
        { co: "bvi", principal: 1505194160, interest: 574555788, date: "2015", noteKey: "bviLoanNote",
          drawdowns: [
            { year: 2015, amount: 128642000 }, { year: 2016, amount: 594747160 },
            { year: 2017, amount: 299500000 }, { year: 2018, amount: 122100000 },
            { year: 2019, amount: 138200000 }, { year: 2023, amount: 145000000 },
            { year: 2024, amount: -80000000 }, { year: 2025, amount: 157005000 }
          ] },
        { co: "primtek", principal: 342442014, interest: 0, date: "2017", noteKey: "primtekLoanNote",
          drawdowns: [
            { year: 2017, amount: 220000000 }, { year: 2018, amount: 1100000000 },
            { year: 2019, amount: -320000000 }, { year: 2020, amount: -227000000 },
            { year: 2021, amount: -255200000 }, { year: 2022, amount: -158400000 },
            { year: 2023, amount: -13200000 }, { year: 2024, amount: -3757986.05 }
          ] },
        { co: "mcash", principal: 1431237114, interest: 0, date: "2017", writtenOff: true, noteKey: "mcashLoanNote",
          drawdowns: [
            { year: 2016, amount: 875023028 }, { year: 2017, amount: 505266322 },
            { year: 2018, amount: 33295350 }, { year: 2019, amount: 28266750 },
            { year: 2020, amount: 30294450 }, { year: 2021, amount: 6369000 },
            { year: 2022, amount: 528000 }, { year: 2023, amount: -47805786 }
          ] },
        { co: "tmn", principal: 970500000, interest: 250781055, date: "2016", writtenOff: true, noteKey: "tmnLoanNote",
          drawdowns: [
            { year: 2016, amount: 600000000 }, { year: 2017, amount: 370500000 }
          ] },
        { co: "wellgrow", principal: 974919660, interest: 0, date: "2015", writtenOff: true, noteKey: "wellgrowNote",
          drawdowns: [
            { year: 2024, amount: 974919660 }
          ] }
      ],
      payables: [
        { co: "mtpl", principal: 14763000000, interest: 3850767247.25, date: "2015", noteKey: "mtplLoanNote",
          drawdowns: [
            { year: "2022-12-31", amount: 11695234438, note: "Loan restructured (IDR)" },
            { year: "2024-04-01", amount: -234438, note: "Rounding adjustment" },
            { year: "2024-04-01", amount: 2722000000, note: "NST balance restructured" },
            { year: "2024-05-03", amount: 346000000, note: "Drawdown for Primtek settlement" }
          ] },
        { co: "wintek", principal: 1005177392, interest: 163667442.08, date: "2014", noteKey: "wintekLoanNote",
          drawdowns: [
            { year: "2023-12-31", amount: 485249432, note: "Loan restructured (IDR)" },
            { year: "2024-04-01", amount: 135427959.81, note: "PSI loan restructured" },
            { year: "2024-05-22", amount: 50000000 },
            { year: "2024-08-23", amount: 50000000 },
            { year: "2024-12-24", amount: 50000000 },
            { year: "2025-03-18", amount: 20000000 },
            { year: "2025-03-24", amount: 120000000 },
            { year: "2025-04-24", amount: 35000000 },
            { year: "2025-06-18", amount: 35000000 },
            { year: "2025-11-26", amount: 5000000 },
            { year: "2026-03-18", amount: 14000000 },
            { year: "2026-06-26", amount: 3500000 },
            { year: "2026-07-31", amount: 2000000 }
          ] }
      ],
      risk: {
        debtToEquity: -1.76,
        currentRatio: 0.30,
        netDebt: 19780461087.45,
        interestBurden: 4014434688.54
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
        { co: "bpiv", principal: 1005177392, interest: 163667442, date: "2016" }
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
      shareCapital: 4326700000,
      bs: {
        assets: 3211153042,
        liabilities: 0,
        equity: 3211153042.01,
        netIncome: 0
      },
      bsDetail: [
        { section: "assets" },
        { label: "Petty cash", amount: 82694 },
        { label: "Investment in Rajapremi", amount: 1999900000 },
        { label: "Cash advance – Rajapremi", amount: 11070348 },
        { label: "Related party receivables", amount: 100000 },
        { label: "Intangible asset (contributed 2026)", amount: 1200000000 },
        { label: "TOTAL ASSETS", amount: 3211153042, total: true },
        { section: "liabilities" },
        { label: "TOTAL LIABILITIES", amount: 0, total: true },
        { section: "equity" },
        { label: "Share capital", amount: 4326700000 },
        { label: "Additional paid-in capital", amount: 3070593000 },
        { label: "Retained earnings", amount: -4186139957.99 },
        { label: "TOTAL EQUITY", amount: 3211153042.01, total: true }
      ],
      isDetail: [
        { section: "revenue" },
        { label: "Income", amount: 0 },
        { section: "expenses" },
        { label: "Expenses", amount: 0 },
        { label: "NET INCOME", amount: 0, total: true }
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
      status: "dormant",
      ownership: [
        { holder: "bpiv", pct: 0.999 },
        { holder: "yn_nominee", pct: 0.001, noteKey: "nomineeStake" }
      ],
      shareCapital: 100000000,
      bs: {
        assets: 786749999.63,
        liabilities: 1571635541,
        equity: -784885541.05,
        netIncome: 0
      },
      bsDetail: [
        { section: "assets" },
        { label: "Petty cash", amount: 350000 },
        { label: "Receivable from service", amount: 786400000 },
        { label: "Office equipment", amount: 16726000 },
        { label: "Accumulated depreciation", amount: -16726000.37 },
        { label: "Office equipment, net", amount: 0, subtotal: true },
        { label: "TOTAL ASSETS", amount: 786749999.63, total: true },
        { section: "liabilities" },
        { label: "Payable to BPIV", amount: 1505194160 },
        { label: "Deposit for management fee", amount: 10000000 },
        { label: "Accrued interest (per own books)", amount: 56441381 },
        { label: "TOTAL LIABILITIES", amount: 1571635541, total: true },
        { section: "equity" },
        { label: "Share capital", amount: 100000000 },
        { label: "Retained earnings", amount: -884885541.05 },
        { label: "TOTAL EQUITY", amount: -784885541.05, total: true }
      ],
      isDetail: [
        { section: "revenue" },
        { label: "Fee income", amount: 0 },
        { section: "expenses" },
        { label: "Expenses", amount: 0 },
        { label: "NET INCOME", amount: 0, total: true }
      ],
      receivables: [
        { co: "rajapremi", principal: 757000000, interest: 0, date: "2019", noteKey: "rajapremiFeeNote" },
        { co: "greenland", principal: 29400000, interest: 0, date: "2020" }
      ],
      payables: [
        { co: "bpiv", principal: 1505194160, interest: 574555788, date: "2015", noteKey: "bviLoanNote" }
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
      bs: {
        assets: 20838703.71,
        liabilities: 3389245607,
        equity: -3368406903.29,
        netIncome: -18592201.84
      },
      bsDetail: [
        { section: "assets" },
        { label: "Cash and cash equivalents", amount: 11333649.23 },
        { label: "Receivables from insurance", amount: 9505054.47 },
        { label: "Office equipment", amount: 22441900 },
        { label: "Accumulated depreciation", amount: -22441900 },
        { label: "Office equipment, net", amount: 0, subtotal: true },
        { label: "TOTAL ASSETS", amount: 20838703.71, total: true },
        { section: "liabilities" },
        { label: "Other payable – BVI (management fee)", amount: 757000000 },
        { label: "Rent payable – BVI", amount: 754668952 },
        { label: "Cash advance due to BPIV", amount: 1866506306 },
        { label: "Due to related parties (MVP)", amount: 11070349 },
        { label: "TOTAL LIABILITIES", amount: 3389245607, total: true },
        { section: "equity" },
        { label: "Share capital", amount: 2000000000 },
        { label: "Retained earnings", amount: -5349814701.45 },
        { label: "Current year earnings (YTD)", amount: -18592201.84 },
        { label: "TOTAL EQUITY", amount: -3368406903.29, total: true }
      ],
      isDetail: [
        { section: "revenue" },
        { label: "Fee income", amount: 26789324.64 },
        { section: "expenses" },
        { label: "Salaries and benefits", amount: -34791390 },
        { label: "Communication", amount: -1030849 },
        { label: "Adm & general", amount: -9566892 },
        { label: "Operating loss", amount: -18599806.36, subtotal: true },
        { section: "other" },
        { label: "Interest income (mutual fund)", amount: 7604.52 },
        { label: "NET LOSS", amount: -18592201.84, total: true }
      ],
      payables: [
        { co: "bpiv", principal: 1866506306, interest: 0, date: "2018", noteKey: "rajapremiLoanNote" },
        { co: "bvi", principal: 757000000, interest: 0, date: "2019", noteKey: "rajapremiFeeNote" },
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
      bs: {
        assets: 889031724,
        liabilities: 0,
        equity: 889031724,
        netIncome: 0
      },
      bsDetail: [
        { section: "assets" },
        { label: "Cash", amount: 41460 },
        { label: "Receivable from shareholder (TSN)", amount: 190000000 },
        { label: "Office equipment", amount: 99666000 },
        { label: "Accumulated depreciation", amount: -99666000 },
        { label: "Other office equipment", amount: 3101263 },
        { label: "Intangible asset", amount: 683395454 },
        { label: "Fixed assets, net", amount: 686496717, subtotal: true },
        { label: "Other assets", amount: 12493547 },
        { label: "TOTAL ASSETS", amount: 889031724, total: true },
        { section: "liabilities" },
        { label: "TOTAL LIABILITIES", amount: 0, total: true },
        { section: "equity" },
        { label: "Share capital", amount: 1500000000 },
        { label: "Retained earnings", amount: -610968276 },
        { label: "TOTAL EQUITY", amount: 889031724, total: true }
      ],
      isDetail: [
        { section: "revenue" },
        { label: "Income", amount: 0 },
        { section: "expenses" },
        { label: "Expenses", amount: 0 },
        { label: "NET INCOME", amount: 0, total: true }
      ],
      receivables: [
        { co: "tsn", principal: 190000000, interest: 30822222, date: "2016" }
      ],
      payables: [
        { co: "bpiv", principal: 970500000, interest: 250781055, date: "2016", writtenOff: true }
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
      bs: {
        assets: 2000865,
        liabilities: 342442013.95,
        equity: -340441149.2,
        netIncome: 0
      },
      bsDetail: [
        { section: "assets" },
        { label: "Receivable from shareholder", amount: 865 },
        { label: "Intangible asset", amount: 2000000 },
        { label: "Office / computer equipment", amount: 6986756 },
        { label: "Accumulated depreciation", amount: -6986756 },
        { label: "Renovation", amount: 32900000 },
        { label: "Accumulated depreciation", amount: -32900000 },
        { label: "Fixed assets, net", amount: 0, subtotal: true },
        { label: "TOTAL ASSETS", amount: 2000865, total: true },
        { section: "liabilities" },
        { label: "Cash advance payable to BPIV", amount: 342442013.95 },
        { label: "TOTAL LIABILITIES", amount: 342442013.95, total: true },
        { section: "equity" },
        { label: "Share capital Seri A", amount: 900000000 },
        { label: "Share capital Seri B", amount: 865 },
        { label: "Retained earnings", amount: -1240442014.2 },
        { label: "TOTAL EQUITY", amount: -340441149.2, total: true }
      ],
      isDetail: [
        { section: "revenue" },
        { label: "Income", amount: 0 },
        { section: "expenses" },
        { label: "Expenses", amount: 0 },
        { label: "NET INCOME", amount: 0, total: true }
      ],
      payables: [
        { co: "bpiv", principal: 342442014, interest: 0, date: "2017", noteKey: "primtekLoanNote" }
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
      bs: {
        assets: 17599105.68,
        liabilities: 40500000,
        equity: -22900894.59,
        netIncome: -294000
      },
      bsDetail: [
        { section: "assets" },
        { label: "Cash", amount: 501000 },
        { label: "Receivables user MainDulu", amount: 17098106 },
        { label: "Office equipment", amount: 73771424 },
        { label: "Accumulated depreciation", amount: -73771424.32 },
        { label: "Office equipment, net", amount: 0, subtotal: true },
        { label: "TOTAL ASSETS", amount: 17599105.68, total: true },
        { section: "liabilities" },
        { label: "Payable to development", amount: 40500000 },
        { label: "TOTAL LIABILITIES", amount: 40500000, total: true },
        { section: "equity" },
        { label: "Share capital", amount: 903656630 },
        { label: "Retained earnings", amount: -926263524.59 },
        { label: "Current year earnings (YTD)", amount: -294000 },
        { label: "TOTAL EQUITY", amount: -22900894.59, total: true }
      ],
      isDetail: [
        { section: "expenses" },
        { label: "Bank charges", amount: -294000 },
        { label: "NET LOSS", amount: -294000, total: true }
      ],
      payables: [
        { co: "bpiv", principal: 1431237114, interest: 0, date: "2017", writtenOff: true, noteKey: "mcashLoanNote" }
      ],
      descriptionKey: "mcashDesc"
    }
  },

  revenue: {
    years: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, "2026*"],
    series: {
      bpiv:       [0, 2781448, 47905797, 212554447, 85896386, 56983835, 4827308, 5743887, 1654551, 3247561, 5459822, 2678673, 74750515, 70000000],
      primtek:   [0, 0, 0, 0, 1023901249, 1641774595, 1517571264, 677077696, 0, 0, 0, 0, 0, 0],
      bvi:       [0, 0, 330802, 114762767, 232576348, 183045322, 116307172, 285325672, 224485332, 356921852, 425662462, 361674613, 107838952, 0],
      rajapremi: [0, 0, 72830935, 340644733, 341672970, 98130584, 81454640, 58130998, 38243746, 28226355, 24194134, 21485179, 26765756, 26796929],
      mvp:       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      mcash:     [0, 0, 0, 0, 3458511, 616932, 1583757, 0, 0, 0, 0, 0, 0, 0],
      tmn:       [0, 0, 0, 615066, 46965, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  },

  expenseHistory: {
    bpiv: { years: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025], amounts: [10137650, 101403283, 374155596, 444216267, 501930800, 409670483, 328041259, 280195778, 366962115, 282776881, 279522872, 589861584, 3501867916] },
    bvi: { years: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025], amounts: [128772000, 834051527, 442545496, 336931821, 258240641, 248483829, 182769606, 202833882, 225997728, 223736468, 126286456] },
    mvp: { years: [2015, 2016, 2017, 2018], amounts: [1750700725, 1935590986, 645509495, 4775000] },
    rajapremi: { years: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, "2026*"], amounts: [111176500, 1648999878, 1239404993, 767768121, 472953483, 536312627, 424930371, 400105598, 390992165, 296835431, 159673665, 45389131] },
    primtek: { years: [2017, 2018, 2019, 2020], amounts: [1803750279, 2002204141, 2065450875, 93333021] },
    tmn: { years: [2016, 2017], amounts: [1502004445, 361316315] },
    mcash: { years: [2016, 2017, 2018, 2019], amounts: [411502199, 871724723, 879312337, 40474429] }
  },

  rajapremiAnalysis: {
    cumulativeRevenue: 1131780030,
    cumulativeExpense: 6449152832,
    cumulativeNet: -5317372802,
    ytdRevenue: 26796929,
    ytdExpense: 45389131,
    ytdNet: -18592202,
    peakYear: 2017,
    peakRevenue: 341672970,
    cash: 11333649,
    monthlyCost: 6484162
  },

  retiredEntities: {
    en: "Wellgrow, NST, EVF — offshore shell vehicles, deactivated; funds have been moved to BPIV books.",
    zh: "Wellgrow、NST、EVF —— 已失效的海外壳工具，资金已转入 BPIV 账上。",
    id: "Wellgrow, NST, EVF — kendaraan shell luar negeri yang sudah nonaktif; dana sudah dipindah ke pembukuan BPIV."
  }
};
