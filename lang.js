// ===== LANG.JS - Pengaturan Bahasa =====

// Daftar terjemahan (Indonesia & English)
const TRANSLATIONS = {
    id: {
        htmlLang: 'id',
        pageTitle: 'CashFlow Analyzer — Analisis Arus Kas Perusahaan',
        metaDescription: 'Aplikasi analisis cash flow untuk membantu investor pemula menganalisis kondisi likuiditas dan kesehatan keuangan perusahaan',

        // Header
        headerDesc: 'Aplikasi analisis cash flow yang kami kembangkan dirancang untuk membantu investor pemula dalam menganalisis kondisi likuiditas dan kesehatan keuangan suatu perusahaan sebelum melakukan investasi. Melalui aplikasi ini, pengguna dapat memperoleh informasi mengenai arus kas perusahaan secara lebih mudah, cepat, dan terstruktur sehingga dapat membantu dalam pengambilan keputusan investasi yang lebih tepat.',
        btnStartHero: 'Mulai Analisis',

        // Bagian tagline
        taglineBadge: '📌 Fitur Utama',
        taglineTitle: 'Kenali Kondisi Likuiditas Perusahaan',
        taglineDesc: 'Aplikasi membantu pengguna memahami kemampuan perusahaan dalam memenuhi kewajiban jangka pendek melalui analisis cash flow dan rasio likuiditas. Dengan begitu, investor dapat mengetahui apakah perusahaan memiliki kondisi keuangan yang stabil atau berisiko.',

        // Kartu fitur
        feature1Title: 'Visualisasi Arus Kas Perusahaan',
        feature1Desc: 'Sistem menyediakan tampilan data arus kas dalam bentuk grafik dan laporan yang mudah dipahami. Pengguna dapat melihat pergerakan kas masuk dan kas keluar perusahaan dalam periode tertentu sehingga analisis keuangan menjadi lebih jelas.',
        feature2Title: 'Analisis untuk Mendukung Keputusan Investasi',
        feature2Desc: 'Fitur analisis pada aplikasi membantu investor pemula dalam menilai performa keuangan perusahaan berdasarkan data cash flow, tren keuangan, dan indikator likuiditas. Hal ini membantu pengguna dalam membandingkan beberapa perusahaan sebelum menentukan pilihan investasi.',
        feature3Title: 'Akses Informasi Secara Praktis',
        feature3Desc: 'Aplikasi dapat diakses dengan mudah kapan saja sehingga pengguna dapat melakukan pengecekan kondisi perusahaan secara fleksibel. Dengan informasi yang tersaji secara real time dan terorganisir, investor pemula dapat lebih percaya diri dalam mengambil keputusan investasi berdasarkan data yang akurat.',

        // Tombol
        btnStartMain: '🚀 Mulai Analisis Sekarang',
        btnBack: '← Kembali',
        btnAnalyze: '🔍 Analisis Sekarang',
        btnReset: '🔄 Reset',
        btnExample: '📝 Data Contoh (INDF 2024)',

        // Tim
        teamTitle: '👥 Kelompok 4',
        teamCourse: 'Mata Kuliah: Analisis & Desain Sistem | Semester 4 - Akuntansi',

        // Footer
        footerText: '© 2026 CashFlow Analyzer — Kelompok 4 | Analisis & Desain Sistem',
        footerRef: 'Referensi: PSAK No. 2 (IAI, 2015) • Romney & Steinbart (2018) • Kieso et al. (2019)',

        // Halaman analisis
        pageAnalysisTitle: '⚙️ Cara Kerja Aplikasi',
        pageAnalysisSubtitle: 'Masukkan data laporan arus kas perusahaan, lalu sistem akan menghitung rasio dan memberikan interpretasi otomatis.',

        // Form input
        inputTitle: '📥 Input Data Keuangan',
        inputDesc: 'Masukkan data laporan arus kas perusahaan (dalam jutaan Rupiah)',
        labelCompanyName: 'Nama Perusahaan',
        placeholderCompanyName: 'Contoh: PT Indofood Sukses Makmur Tbk',
        helpCompanyName: 'Masukkan nama perusahaan yang akan dianalisis',
        labelYear: 'Tahun Laporan',
        placeholderYear: 'Contoh: 2024',
        helpYear: 'Tahun laporan keuangan',
        labelOCF: 'Arus Kas Operasi (OCF)',
        placeholderOCF: 'Contoh: 17507956',
        helpOCF: 'Kas dari aktivitas utama perusahaan',
        labelICF: 'Arus Kas Investasi (ICF)',
        placeholderICF: 'Contoh: -6994964',
        helpICF: 'Kas untuk aktivitas investasi',
        labelFCF: 'Arus Kas Pendanaan (FCF)',
        placeholderFCF: 'Contoh: -680208',
        helpFCF: 'Kas dari aktivitas pendanaan/hutang',
        labelCL: 'Kewajiban Lancar',
        placeholderCL: 'Contoh: 37094061',
        helpCL: 'Total hutang jangka pendek',

        // History
        historyTitle: '🕒 Riwayat Analisis',
        historyEmpty: 'Belum ada riwayat analisis.',
        historyDelete: 'Hapus',
        historyClearAll: '🗑 Hapus Semua Riwayat',
        historyLoadConfirm: 'Muat ulang data analisis ini?',

        // Bagian hasil
        resultTitle: '📋 Hasil Analisis',
        resultTitleWithName: (name) => `📋 Hasil Analisis — ${name}`,
        ratioTitle: '📈 Hasil Perhitungan Rasio',
        ratioFormulaFCF: 'OCF - |ICF|',
        ratioFormulaCFR: 'OCF / Kewajiban Lancar',
        ratioFormulaCFA: '(OCF + ICF + FCF) / Kewajiban Lancar',
        patternTitle: '🔎 Analisis Pola Arus Kas',
        patternOCFTitle: 'Operasi (OCF)',
        patternICFTitle: 'Investasi (ICF)',
        patternFCFTitle: 'Pendanaan (FCF)',
        interpretationTitle: '📝 Interpretasi Pola Arus Kas',
        statusTitle: '🏢 Status Kondisi Perusahaan',
        chartTitle: '📊 Visualisasi Arus Kas',
        btnDownload: '📥 Download PDF',
        beiTitle: '🔍 Cari Laporan Keuangan',
        beiDesc: 'Gunakan tautan di bawah ini untuk mencari dokumen laporan tahunan (Annual Report) atau laporan keuangan (Financial Statement) perusahaan secara otomatis.',
        btnBeiSearch: 'Cari di Bursa Efek (IDX)',
        btnGoogleSearch: 'Cari Otomatis di Google',

        // Tanda positif/negatif
        positive: '＋ Positif',
        negative: '－ Negatif',

        // Interpretasi rasio
        fcfPositive: '✅ Positif — Perusahaan memiliki kas bebas',
        fcfNegative: '⚠️ Negatif — Kas digunakan untuk ekspansi/kekurangan',
        cfrPositive: '✅ ≥ 1 — Mampu memenuhi kewajiban',
        cfrNegative: '⚠️ < 1 — Perlu perhatian',
        cfaPositive: '✅ Tinggi — Kondisi keuangan baik',
        cfaNegative: '⚠️ Rendah — Risiko likuiditas',

        // Interpretasi pola
        ocfPositiveText: 'Aktivitas utama menghasilkan kas',
        ocfNegativeText: 'Kinerja operasional lemah',
        icfPositiveText: 'Pelepasan aset',
        icfNegativeText: 'Investasi (indikasi pertumbuhan)',
        fcfPositiveText: 'Tambahan modal/utang',
        fcfNegativeText: 'Pembayaran kewajiban/dividen',

        // Status
        statusGoodBadge: '🟢 BAIK',
        statusGoodText: 'Perusahaan dalam kondisi keuangan yang sehat dan likuid.',
        statusWarnBadge: '🟡 CUKUP',
        statusWarnText: 'Perusahaan dalam kondisi cukup, namun perlu perhatian pada beberapa aspek.',
        statusBadBadge: '🔴 BURUK',
        statusBadText: 'Perusahaan mengalami tekanan keuangan dan risiko likuiditas tinggi.',

        // Interpretasi paragraf panjang
        patternInterpretations: {
            healthy: {
                label: 'Kondisi Sehat & Berkembang',
                text: 'Berdasarkan hasil analisis laporan arus kas, perusahaan menunjukkan kondisi keuangan yang relatif sehat dan stabil. Arus kas positif dari aktivitas operasi menandakan bahwa kegiatan utama perusahaan mampu menghasilkan kas secara konsisten. Sementara itu, arus kas negatif pada aktivitas investasi mengindikasikan adanya pengeluaran untuk pengembangan aset, ekspansi usaha, atau peningkatan kapasitas operasional yang dapat mendukung pertumbuhan perusahaan di masa mendatang. Aktivitas pendanaan yang stabil menunjukkan perusahaan masih mampu mengelola kebutuhan modal dengan baik tanpa ketergantungan yang berlebihan terhadap utang maupun pendanaan eksternal.'
            },
            growthPhase: {
                label: 'Fase Pertumbuhan — Perlu Pemantauan',
                text: 'Berdasarkan hasil analisis, perusahaan menunjukkan tanda-tanda sedang dalam fase pertumbuhan atau transisi. Arus kas dari aktivitas operasi masih positif, yang berarti bisnis utama perusahaan tetap menghasilkan pendapatan. Namun, besarnya pengeluaran untuk investasi dan/atau pendanaan menyebabkan rasio-rasio keuangan belum berada di tingkat yang ideal. Kondisi ini umum terjadi pada perusahaan yang sedang melakukan ekspansi besar-besaran, namun perlu dipantau secara berkala agar tidak menimbulkan tekanan likuiditas di masa mendatang. Manajemen disarankan untuk memastikan bahwa investasi yang dilakukan dapat memberikan imbal hasil yang memadai dalam jangka menengah hingga panjang.'
            },
            liquidityRisk: {
                label: 'Risiko Likuiditas',
                text: 'Meskipun arus kas dari aktivitas operasi masih positif, analisis rasio menunjukkan bahwa perusahaan menghadapi risiko likuiditas yang signifikan. Kas yang dihasilkan dari operasional belum cukup untuk menutupi kewajiban jangka pendek secara memadai. Pengeluaran investasi yang besar dan/atau arus kas pendanaan yang negatif semakin menekan posisi kas perusahaan, sehingga Free Cash Flow menjadi negatif. Perusahaan perlu mengevaluasi kembali strategi pengeluaran investasi, mengoptimalkan efisiensi operasional, dan memperkuat arus kas untuk menghindari kesulitan keuangan di masa mendatang.'
            },
            debtDependent: {
                label: 'Ketergantungan pada Utang',
                text: 'Hasil analisis menunjukkan bahwa perusahaan belum mampu menghasilkan arus kas positif dari aktivitas operasionalnya. Kondisi ini mengindikasikan bahwa pemasukan dari kegiatan bisnis utama belum cukup untuk menutupi pengeluaran operasional perusahaan. Di sisi lain, adanya arus kas positif dari aktivitas pendanaan menunjukkan perusahaan masih bergantung pada sumber dana eksternal, seperti pinjaman, penerbitan saham, atau tambahan modal dari investor untuk menjaga kelangsungan operasional. Jika kondisi ini terjadi secara berkelanjutan, perusahaan berpotensi mengalami peningkatan risiko keuangan akibat tingginya ketergantungan terhadap utang atau pendanaan eksternal.'
            },
            highRisk: {
                label: 'Risiko Keuangan Tinggi',
                text: 'Berdasarkan analisis arus kas, perusahaan berada dalam kondisi yang perlu diwaspadai karena aktivitas operasional tidak mampu menghasilkan kas yang memadai, sementara perusahaan juga tetap melakukan pengeluaran untuk aktivitas investasi. Kondisi ini dapat menyebabkan tekanan terhadap likuiditas perusahaan karena kas keluar lebih besar dibandingkan kas masuk. Apabila tidak diimbangi dengan pendanaan yang cukup atau perbaikan kinerja operasional, perusahaan berpotensi mengalami kesulitan keuangan dalam memenuhi kewajiban jangka pendek maupun mempertahankan keberlangsungan usaha. Situasi ini dapat menjadi indikator meningkatnya risiko finansial bagi investor.'
            }
        },

        // Insight / wawasan
        insightOCFPositive: 'Arus kas operasi positif menunjukkan aktivitas utama perusahaan menghasilkan kas.',
        insightOCFNegative: 'Arus kas operasi negatif menunjukkan kinerja operasional perusahaan lemah.',
        insightFCFPositive: (fcf) => `Free Cash Flow sebesar ${fcf} juta menunjukkan perusahaan memiliki kas bebas. Ini berarti setelah semua kebutuhan operasional dan investasi terpenuhi, masih ada sisa dana yang bisa digunakan untuk ekspansi bisnis atau dibagikan ke investor.`,
        insightFCFNegative: (fcf) => `Free Cash Flow negatif (${fcf} juta). Kas habis untuk investasi atau terjadi kekurangan.`,
        insightCFRPositive: (cfr) => `Cash Flow Ratio ${cfr} — perusahaan mampu memenuhi kewajiban jangka pendek.`,
        insightCFRNegative: (cfr) => `Cash Flow Ratio ${cfr} — kemampuan memenuhi kewajiban jangka pendek masih belum kuat. Ini menunjukkan bahwa likuiditas perusahaan belum sepenuhnya aman, sehingga ada risiko jika terjadi tekanan keuangan dalam waktu dekat.`,
        insightPatternGood: 'Pola arus kas (Operasi +, Investasi -) mengindikasikan perusahaan sehat dan berkembang. Aktivitas bisnis utamanya sudah mampu menghasilkan kas secara konsisten.',
        insightDebtDependent: 'Perusahaan bergantung pada pendanaan eksternal (utang/modal) untuk operasional.',
        insightHighRisk: 'Operasi dan investasi sama-sama negatif — risiko keuangan tinggi!',
        insightOverallGood: (name) => `Secara keseluruhan, ${name} berada di jalur yang cukup baik dan menunjukkan tanda-tanda pertumbuhan. Perusahaan memiliki potensi untuk berkembang bagi investor.`,
        insightOverallWarn: (name) => `Secara keseluruhan, ${name} menunjukkan kondisi yang cukup namun belum sepenuhnya solid. Diperlukan evaluasi lebih lanjut sebelum mengambil keputusan investasi.`,

        // Label chart
        chartLabels: ['Arus Kas Operasi', 'Arus Kas Investasi', 'Arus Kas Pendanaan', 'Free Cash Flow'],
        chartDatasetLabel: 'Nilai (Juta Rp)',
        chartTooltip: (val) => `Rp ${val} juta`,

        // Pesan error
        alertCompanyName: 'Mohon isi nama perusahaan.',
        alertInvalidData: 'Mohon isi semua data dengan benar. Kewajiban Lancar tidak boleh 0.',
    },

    en: {
        htmlLang: 'en',
        pageTitle: 'CashFlow Analyzer — Company Cash Flow Analysis',
        metaDescription: 'A cash flow analysis application designed to help beginner investors analyze a company\'s liquidity condition and financial health',

        // Header
        headerDesc: 'The cash flow analysis application we developed is designed to help beginner investors analyze a company\'s liquidity and financial health before making an investment. Through this application, users can obtain information about a company\'s cash flow more easily, quickly, and in a structured manner to support better investment decisions.',
        btnStartHero: 'Start Analysis',

        // Tagline section
        taglineBadge: '📌 Key Features',
        taglineTitle: 'Understand Company Liquidity Conditions',
        taglineDesc: 'This application helps users understand a company\'s ability to meet its short-term obligations through cash flow analysis and liquidity ratios. Investors can then determine whether a company has a stable or risky financial condition.',

        // Feature cards
        feature1Title: 'Company Cash Flow Visualization',
        feature1Desc: 'The system displays cash flow data in easy-to-understand charts and reports. Users can view cash inflows and outflows over specific periods, making financial analysis clearer.',
        feature2Title: 'Analysis to Support Investment Decisions',
        feature2Desc: 'The analysis features help beginner investors assess a company\'s financial performance based on cash flow data, financial trends, and liquidity indicators, enabling comparison of multiple companies before choosing an investment.',
        feature3Title: 'Practical Information Access',
        feature3Desc: 'The application can be accessed anytime, allowing users to check company conditions flexibly. With real-time and organized information, beginner investors can make more confident investment decisions based on accurate data.',

        // Buttons
        btnStartMain: '🚀 Start Analysis Now',
        btnBack: '← Back',
        btnAnalyze: '🔍 Analyze Now',
        btnReset: '🔄 Reset',
        btnExample: '📝 Sample Data (INDF 2024)',

        // Team
        teamTitle: '👥 Group 4',
        teamCourse: 'Course: System Analysis & Design | Semester 4 - Accounting',

        // Footer
        footerText: '© 2026 CashFlow Analyzer — Group 4 | System Analysis & Design',
        footerRef: 'References: PSAK No. 2 (IAI, 2015) • Romney & Steinbart (2018) • Kieso et al. (2019)',

        // Analysis page
        pageAnalysisTitle: '⚙️ How It Works',
        pageAnalysisSubtitle: 'Enter the company\'s cash flow statement data, then the system will calculate ratios and provide automatic interpretation.',

        // Form input
        inputTitle: '📥 Financial Data Input',
        inputDesc: 'Enter the company\'s cash flow statement data (in millions of Rupiah)',
        labelCompanyName: 'Company Name',
        placeholderCompanyName: 'Example: PT Indofood Sukses Makmur Tbk',
        helpCompanyName: 'Enter the company name to be analyzed',
        labelYear: 'Report Year',
        placeholderYear: 'Example: 2024',
        helpYear: 'Financial report year',
        labelOCF: 'Operating Cash Flow (OCF)',
        placeholderOCF: 'Example: 17507956',
        helpOCF: 'Cash from the company\'s main activities',
        labelICF: 'Investing Cash Flow (ICF)',
        placeholderICF: 'Example: -6994964',
        helpICF: 'Cash for investing activities',
        labelFCF: 'Financing Cash Flow (FCF)',
        placeholderFCF: 'Example: -680208',
        helpFCF: 'Cash from financing/debt activities',
        labelCL: 'Current Liabilities',
        placeholderCL: 'Example: 37094061',
        helpCL: 'Total short-term liabilities',

        // History
        historyTitle: '🕒 Analysis History',
        historyEmpty: 'No analysis history yet.',
        historyDelete: 'Delete',
        historyClearAll: '🗑 Clear All History',
        historyLoadConfirm: 'Reload this analysis data?',

        // Results section
        resultTitle: '📋 Analysis Results',
        resultTitleWithName: (name) => `📋 Analysis Results — ${name}`,
        ratioTitle: '📈 Ratio Calculation Results',
        ratioFormulaFCF: 'OCF - |ICF|',
        ratioFormulaCFR: 'OCF / Current Liabilities',
        ratioFormulaCFA: '(OCF + ICF + FCF) / Current Liabilities',
        patternTitle: '🔎 Cash Flow Pattern Analysis',
        patternOCFTitle: 'Operating (OCF)',
        patternICFTitle: 'Investing (ICF)',
        patternFCFTitle: 'Financing (FCF)',
        interpretationTitle: '📝 Cash Flow Pattern Interpretation',
        statusTitle: '🏢 Company Condition Status',
        chartTitle: '📊 Cash Flow Visualization',
        btnDownload: '📥 Download PDF',
        beiTitle: '🔍 Find Financial Reports',
        beiDesc: 'Use the links below to automatically search for the company\'s Annual Report or Financial Statement documents.',
        btnBeiSearch: 'Search on Stock Exchange (IDX)',
        btnGoogleSearch: 'Auto Search on Google',

        // Positive/negative signs
        positive: '＋ Positive',
        negative: '－ Negative',

        // Ratio interpretation
        fcfPositive: '✅ Positive — The company has free cash available',
        fcfNegative: '⚠️ Negative — Cash is used for expansion or there is a shortfall',
        cfrPositive: '✅ ≥ 1 — Able to meet obligations',
        cfrNegative: '⚠️ < 1 — Needs attention',
        cfaPositive: '✅ High — Good financial condition',
        cfaNegative: '⚠️ Low — Liquidity risk',

        // Pattern interpretation
        ocfPositiveText: 'Core activities generate cash',
        ocfNegativeText: 'Weak operational performance',
        icfPositiveText: 'Asset disposal',
        icfNegativeText: 'Investment (indicates growth)',
        fcfPositiveText: 'Additional capital/debt',
        fcfNegativeText: 'Obligation/dividend payments',

        // Status
        statusGoodBadge: '🟢 GOOD',
        statusGoodText: 'The company is in a healthy and liquid financial condition.',
        statusWarnBadge: '🟡 MODERATE',
        statusWarnText: 'The company is in a moderate condition, but certain aspects need attention.',
        statusBadBadge: '🔴 POOR',
        statusBadText: 'The company is experiencing financial pressure and high liquidity risk.',

        // Long paragraph interpretations
        patternInterpretations: {
            healthy: {
                label: 'Healthy & Growing Condition',
                text: 'Based on the cash flow statement analysis, the company shows a relatively healthy and stable financial condition. Positive cash flow from operating activities indicates that the company\'s core business consistently generates cash. Meanwhile, negative cash flow from investing activities indicates expenditures for asset development, business expansion, or operational capacity enhancement that can support future growth. Stable financing activities indicate the company manages its capital needs well without excessive dependence on debt or external funding.'
            },
            growthPhase: {
                label: 'Growth Phase — Monitoring Needed',
                text: 'Based on the analysis, the company shows signs of being in a growth or transition phase. Cash flow from operating activities is still positive, meaning the core business continues to generate revenue. However, large expenditures for investment and/or financing cause financial ratios to fall below ideal levels. This is common for companies undergoing significant expansion, but it needs to be monitored regularly to prevent liquidity pressure in the future. Management should ensure that investments can deliver adequate returns in the medium to long term.'
            },
            liquidityRisk: {
                label: 'Liquidity Risk',
                text: 'Although cash flow from operating activities is still positive, the ratio analysis shows the company faces significant liquidity risk. Cash generated from operations is not sufficient to adequately cover short-term obligations. Large investment expenditures and/or negative financing cash flow further pressure the company\'s cash position, resulting in negative Free Cash Flow. The company needs to re-evaluate its investment strategy, optimize operational efficiency, and strengthen cash flow to avoid financial difficulties.'
            },
            debtDependent: {
                label: 'Debt Dependency',
                text: 'The analysis indicates that the company has not been able to generate positive cash flow from its operations. This means revenue from core business activities is not sufficient to cover operational expenditures. On the other hand, positive cash flow from financing activities shows the company still depends on external funding such as loans, stock issuance, or additional investor capital to maintain operations. If this condition persists, the company may face increasing financial risk due to high dependence on debt or external funding.'
            },
            highRisk: {
                label: 'High Financial Risk',
                text: 'Based on cash flow analysis, the company is in a condition that requires caution because operational activities cannot generate adequate cash, while the company continues spending on investment activities. This can cause pressure on liquidity as cash outflows exceed inflows. Without sufficient funding or improved operational performance, the company may face difficulties meeting short-term obligations or maintaining business continuity. This situation can indicate increasing financial risk for investors.'
            }
        },

        // Insights
        insightOCFPositive: 'Positive operating cash flow indicates the company\'s core activities generate cash.',
        insightOCFNegative: 'Negative operating cash flow indicates weak operational performance.',
        insightFCFPositive: (fcf) => `Free Cash Flow of ${fcf} million shows the company has free cash available. This means after all operational and investment needs are met, there are remaining funds for business expansion or distribution to investors.`,
        insightFCFNegative: (fcf) => `Negative Free Cash Flow (${fcf} million). Cash is used up for investment or there is a shortfall.`,
        insightCFRPositive: (cfr) => `Cash Flow Ratio of ${cfr} — the company can meet its short-term obligations.`,
        insightCFRNegative: (cfr) => `Cash Flow Ratio of ${cfr} — the ability to meet short-term obligations is still weak. This indicates the company's liquidity is not fully secure, posing risk if financial pressure occurs in the near term.`,
        insightPatternGood: 'Cash flow pattern (Operating +, Investing -) indicates the company is healthy and growing. Core business activities consistently generate cash.',
        insightDebtDependent: 'The company depends on external funding (debt/capital) for its operations.',
        insightHighRisk: 'Both operating and investing cash flows are negative — high financial risk!',
        insightOverallGood: (name) => `Overall, ${name} is on a fairly good track and shows signs of growth. The company has potential to grow for investors.`,
        insightOverallWarn: (name) => `Overall, ${name} shows a moderate condition but is not yet fully solid. Further evaluation is needed before making investment decisions.`,

        // Chart labels
        chartLabels: ['Operating Cash Flow', 'Investing Cash Flow', 'Financing Cash Flow', 'Free Cash Flow'],
        chartDatasetLabel: 'Value (Million Rp)',
        chartTooltip: (val) => `Rp ${val} million`,

        // Error messages
        alertCompanyName: 'Please enter the company name.',
        alertInvalidData: 'Please fill in all data correctly. Current Liabilities cannot be 0.',
    }
};

// Bahasa yang sedang aktif (ambil dari localStorage kalau ada)
let currentLang = localStorage.getItem('cashflow-lang') || 'id';

// Fungsi untuk mengambil teks terjemahan
function t(key) {
    return TRANSLATIONS[currentLang][key] || TRANSLATIONS['id'][key] || key;
}

// Fungsi ganti bahasa
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('cashflow-lang', lang);
    document.documentElement.lang = t('htmlLang');
    document.title = t('pageTitle');
    document.querySelector('meta[name="description"]').setAttribute('content', t('metaDescription'));
    applyTranslations();

    // Kalau hasil analisis sedang ditampilkan, update juga hasilnya
    window.dispatchEvent(new Event('languageChanged'));
}

// Terapkan terjemahan ke semua elemen yang punya atribut data-i18n
function applyTranslations() {
    // Update teks
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
        var key = el.getAttribute('data-i18n');
        if (TRANSLATIONS[currentLang][key]) {
            el.textContent = TRANSLATIONS[currentLang][key];
        }
    });

    // Update placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
        var key = el.getAttribute('data-i18n-placeholder');
        if (TRANSLATIONS[currentLang][key]) {
            el.placeholder = TRANSLATIONS[currentLang][key];
        }
    });

    // Update tombol bahasa
    var langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        var flagEl = langToggle.querySelector('.lang-flag');
        var labelEl = langToggle.querySelector('.lang-label');
        if (currentLang === 'id') {
            flagEl.textContent = '🇮🇩';
            labelEl.textContent = 'ID';
        } else {
            flagEl.textContent = '🇬🇧';
            labelEl.textContent = 'EN';
        }
    }
}

// Toggle bahasa (dipanggil dari tombol)
function toggleLanguage() {
    setLanguage(currentLang === 'id' ? 'en' : 'id');
}
