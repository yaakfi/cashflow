// ===== APP.JS - CashFlow Analyzer =====

// Navigasi halaman
const pageLanding = document.getElementById('page-landing');
const pageAnalysis = document.getElementById('page-analysis');

function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    page.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById('btn-start-hero').addEventListener('click', function(e) {
    e.preventDefault();
    showPage(pageAnalysis);
});
document.getElementById('btn-start').addEventListener('click', function() {
    showPage(pageAnalysis);
});
document.getElementById('btn-back').addEventListener('click', function() {
    showPage(pageLanding);
});

// ===== HISTORY (CRUD) =====
const STORAGE_KEY = 'cashflow_history';

function getHistory() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveToHistory(data) {
    let history = getHistory();
    // Tambah timestamp
    data.timestamp = new Date().toISOString();
    // Masukkan di awal array
    history.unshift(data);
    // Batasi maksimal 20 history
    if (history.length > 20) history = history.slice(0, 20);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    renderHistory();
}

function deleteHistory(index) {
    let history = getHistory();
    history.splice(index, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    renderHistory();
}

function clearAllHistory() {
    localStorage.removeItem(STORAGE_KEY);
    renderHistory();
}

function renderHistory() {
    const historySection = document.getElementById('history-section');
    const historyList = document.getElementById('history-list');
    const historyEmpty = document.getElementById('history-empty');
    
    const history = getHistory();
    historyList.innerHTML = '';
    
    if (history.length === 0) {
        historyEmpty.style.display = 'block';
    } else {
        historyEmpty.style.display = 'none';
        
        history.forEach(function(item, index) {
            const date = new Date(item.timestamp).toLocaleDateString('id-ID', {
                year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
            });
            
            let statusColor = item.score >= 3 ? '#10b981' : (item.score >= 2 ? '#f59e0b' : '#ef4444');
            
            const div = document.createElement('div');
            div.className = 'history-item';
            div.innerHTML = 
                '<div class="history-info" onclick="loadFromHistory(' + index + ')">' +
                    '<span class="history-name">' + item.companyName + ' (' + item.reportYear + ')</span>' +
                    '<span class="history-date">' + date + '</span>' +
                '</div>' +
                '<div class="history-actions">' +
                    '<span style="width:12px;height:12px;border-radius:50%;background-color:' + statusColor + '" title="Status"></span>' +
                    '<button type="button" class="btn btn-sm btn-outline-danger" onclick="deleteHistory(' + index + ')">' + t('historyDelete') + '</button>' +
                '</div>';
                
            historyList.appendChild(div);
        });
    }
    historySection.classList.remove('hidden');
}

function loadFromHistory(index) {
    if (confirm(t('historyLoadConfirm'))) {
        const history = getHistory();
        const data = history[index];
        if (data) {
            document.getElementById('company-name').value = data.companyName;
            document.getElementById('report-year').value = data.reportYear;
            document.getElementById('ocf').value = data.ocf;
            document.getElementById('icf').value = data.icf;
            document.getElementById('fcf-input').value = data.fcfInput;
            document.getElementById('cl').value = data.cl;
            
            lastAnalysis = data;
            analyze(data.companyName, data.reportYear, data.ocf, data.icf, data.fcfInput, data.cl, false);
        }
    }
}

document.getElementById('btn-clear-history').addEventListener('click', function() {
    if (confirm(t('historyClearAll') + '?')) {
        clearAllHistory();
    }
});


// ===== FORM =====
const form = document.getElementById('cashflow-form');
const resultsSection = document.getElementById('results-section');
let chartInstance = null;
let lastAnalysis = null; // simpan data analisis terakhir

// Data contoh: PT Indofood Sukses Makmur Tbk (INDF 2024)
document.getElementById('btn-example').addEventListener('click', function() {
    document.getElementById('company-name').value = 'PT Indofood Sukses Makmur Tbk';
    document.getElementById('report-year').value = '2024';
    document.getElementById('ocf').value = 17507956;
    document.getElementById('icf').value = -6994964;
    document.getElementById('fcf-input').value = -680208;
    document.getElementById('cl').value = 37094061;
});

// Reset form
document.getElementById('btn-reset').addEventListener('click', function() {
    form.reset();
    resultsSection.classList.add('hidden');
    lastAnalysis = null;
    if (chartInstance) { chartInstance.destroy(); chartInstance = null; }
});

// Submit form
form.addEventListener('submit', function(e) {
    e.preventDefault();
    var companyName = document.getElementById('company-name').value.trim();
    var reportYear = document.getElementById('report-year').value;
    var ocf = parseFloat(document.getElementById('ocf').value);
    var icf = parseFloat(document.getElementById('icf').value);
    var fcfInput = parseFloat(document.getElementById('fcf-input').value);
    var cl = parseFloat(document.getElementById('cl').value);

    if (!companyName || !reportYear) {
        alert(t('alertCompanyName'));
        return;
    }
    if (isNaN(ocf) || isNaN(icf) || isNaN(fcfInput) || isNaN(cl) || cl === 0) {
        alert(t('alertInvalidData'));
        return;
    }

    // Simpan data untuk re-render saat ganti bahasa
    lastAnalysis = { companyName, reportYear, ocf, icf, fcfInput, cl };
    analyze(companyName, reportYear, ocf, icf, fcfInput, cl, true);
});

// Kalau bahasa diganti & hasil analisis sedang tampil, render ulang
window.addEventListener('languageChanged', function() {
    renderHistory();
    if (lastAnalysis && !resultsSection.classList.contains('hidden')) {
        analyze(lastAnalysis.companyName, lastAnalysis.reportYear, lastAnalysis.ocf, lastAnalysis.icf, lastAnalysis.fcfInput, lastAnalysis.cl, false);
    }
});

// ===== INTERPRETASI POLA ARUS KAS =====
function getPatternInterpretation(ocf, icf, fcfInput, score) {
    var patterns = t('patternInterpretations');
    if (score >= 3) {
        return { label: patterns.healthy.label, text: patterns.healthy.text, className: 'interp-healthy' };
    } else if (score >= 2) {
        if (ocf < 0 && fcfInput > 0) {
            return { label: patterns.debtDependent.label, text: patterns.debtDependent.text, className: 'interp-warning' };
        }
        return { label: patterns.growthPhase.label, text: patterns.growthPhase.text, className: 'interp-warning' };
    } else {
        if (ocf > 0) {
            return { label: patterns.liquidityRisk.label, text: patterns.liquidityRisk.text, className: 'interp-danger' };
        } else if (ocf < 0 && fcfInput > 0) {
            return { label: patterns.debtDependent.label, text: patterns.debtDependent.text, className: 'interp-warning' };
        }
        return { label: patterns.highRisk.label, text: patterns.highRisk.text, className: 'interp-danger' };
    }
}

// ===== ANALISIS UTAMA =====
function analyze(companyName, reportYear, ocf, icf, fcfInput, cl, saveToHistoryFlag) {
    // Tampilkan nama perusahaan dan tahun
    var title = t('resultTitleWithName')(companyName + ' (' + reportYear + ')');
    document.getElementById('company-display').textContent = title;

    // Hitung rasio
    var fcf = ocf - Math.abs(icf);
    var cfr = ocf / cl;
    var cfa = (ocf + icf + fcfInput) / cl;

    // Hitung score
    var score = 0;
    if (fcf > 0) score++;
    if (cfr >= 1) score++;
    if (cfa >= 1) score++;
    if (ocf > 0) score++;

    // Tampilkan nilai rasio
    document.getElementById('fcf-value').textContent = formatNumber(fcf);
    document.getElementById('cfr-value').textContent = cfr.toFixed(2);
    document.getElementById('cfa-value').textContent = cfa.toFixed(2);

    // Interpretasi FCF
    var fcfEl = document.getElementById('fcf-interpret');
    if (fcf > 0) {
        fcfEl.textContent = t('fcfPositive');
        fcfEl.className = 'ratio-interpret positive';
    } else {
        fcfEl.textContent = t('fcfNegative');
        fcfEl.className = 'ratio-interpret negative';
    }

    // Interpretasi CFR
    var cfrEl = document.getElementById('cfr-interpret');
    if (cfr >= 1) {
        cfrEl.textContent = t('cfrPositive');
        cfrEl.className = 'ratio-interpret positive';
    } else {
        cfrEl.textContent = t('cfrNegative');
        cfrEl.className = 'ratio-interpret negative';
    }

    // Interpretasi CFA
    var cfaEl = document.getElementById('cfa-interpret');
    if (cfa >= 1) {
        cfaEl.textContent = t('cfaPositive');
        cfaEl.className = 'ratio-interpret positive';
    } else {
        cfaEl.textContent = t('cfaNegative');
        cfaEl.className = 'ratio-interpret negative';
    }

    // Pola arus kas (positif/negatif)
    setPattern('ocf', ocf, t('ocfPositiveText'), t('ocfNegativeText'));
    setPattern('icf', icf, t('icfPositiveText'), t('icfNegativeText'));
    setPattern('fcf', fcfInput, t('fcfPositiveText'), t('fcfNegativeText'));

    // Interpretasi pola (paragraf panjang)
    var patternInterp = getPatternInterpretation(ocf, icf, fcfInput, score);
    var interpBox = document.getElementById('pattern-interpretation');
    interpBox.className = 'interpretation-box ' + patternInterp.className;
    interpBox.innerHTML = '<span class="interp-label">' + patternInterp.label + '</span>' +
        '<p>' + patternInterp.text + '</p>';

    // Status perusahaan
    var statusBox = document.getElementById('status-box');
    var statusBadge = document.getElementById('status-badge');
    var statusText = document.getElementById('status-text');
    statusBox.className = 'status-box';

    if (score >= 3) {
        statusBox.classList.add('status-good');
        statusBadge.textContent = t('statusGoodBadge');
        statusText.textContent = t('statusGoodText');
    } else if (score >= 2) {
        statusBox.classList.add('status-warn');
        statusBadge.textContent = t('statusWarnBadge');
        statusText.textContent = t('statusWarnText');
    } else {
        statusBox.classList.add('status-bad');
        statusBadge.textContent = t('statusBadBadge');
        statusText.textContent = t('statusBadText');
    }

    // Insights / Wawasan
    var insightList = document.getElementById('insight-list');
    insightList.innerHTML = '';
    var insights = [];

    if (ocf > 0) insights.push({ text: t('insightOCFPositive'), type: 'good' });
    else insights.push({ text: t('insightOCFNegative'), type: 'bad' });

    if (fcf > 0) insights.push({ text: t('insightFCFPositive')(formatNumber(fcf)), type: 'good' });
    else insights.push({ text: t('insightFCFNegative')(formatNumber(fcf)), type: 'bad' });

    if (cfr >= 1) insights.push({ text: t('insightCFRPositive')(cfr.toFixed(2)), type: 'good' });
    else insights.push({ text: t('insightCFRNegative')(cfr.toFixed(2)), type: 'warn' });

    if (ocf > 0 && icf < 0) insights.push({ text: t('insightPatternGood'), type: 'good' });
    if (ocf < 0 && fcfInput > 0) insights.push({ text: t('insightDebtDependent'), type: 'warn' });
    if (ocf < 0 && icf < 0) insights.push({ text: t('insightHighRisk'), type: 'bad' });

    // Kesimpulan keseluruhan
    if (score >= 3) {
        insights.push({ text: t('insightOverallGood')(companyName), type: 'good' });
    } else if (score >= 2) {
        insights.push({ text: t('insightOverallWarn')(companyName), type: 'warn' });
    }

    insights.forEach(function(item) {
        var div = document.createElement('div');
        div.className = 'insight-item insight-' + item.type;
        div.textContent = item.text;
        insightList.appendChild(div);
    });

    // Link BEI
    var query = "site:idx.co.id laporan tahunan " + companyName + " " + reportYear;
    document.getElementById('link-google').href = "https://www.google.com/search?q=" + encodeURIComponent(query);
    document.getElementById('link-idx').href = "https://www.idx.co.id/id/perusahaan-tercatat/laporan-keuangan-dan-tahunan/";

    // History Save
    if (saveToHistoryFlag) {
        saveToHistory({ companyName, reportYear, ocf, icf, fcfInput, cl, score });
    }

    // Chart / Grafik
    renderChart(ocf, icf, fcfInput, fcf);

    // Tampilkan hasil
    resultsSection.classList.remove('hidden');
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function setPattern(prefix, value, posText, negText) {
    var signEl = document.getElementById(prefix + '-sign');
    var interpretEl = document.getElementById(prefix + '-interpret');
    if (value >= 0) {
        signEl.textContent = t('positive');
        signEl.className = 'pattern-sign positive';
        interpretEl.textContent = posText;
    } else {
        signEl.textContent = t('negative');
        signEl.className = 'pattern-sign negative';
        interpretEl.textContent = negText;
    }
}

function renderChart(ocf, icf, fcfInput, fcf) {
    if (chartInstance) chartInstance.destroy();
    var ctx = document.getElementById('cashflow-chart').getContext('2d');
    chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: t('chartLabels'),
            datasets: [{
                label: t('chartDatasetLabel'),
                data: [ocf, icf, fcfInput, fcf],
                backgroundColor: [
                    ocf >= 0 ? '#10b981' : '#ef4444',
                    icf >= 0 ? '#10b981' : '#ef4444',
                    fcfInput >= 0 ? '#10b981' : '#ef4444',
                    fcf >= 0 ? '#10b981' : '#ef4444' // Warna konsisten hijau/merah
                ],
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#1e293b',
                    titleFont: { family: 'Inter', weight: '600' },
                    bodyFont: { family: 'Inter' },
                    padding: 12,
                    cornerRadius: 8,
                    callbacks: {
                        label: function(context) {
                            return t('chartTooltip')(context.raw.toLocaleString('id-ID'));
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        callback: function(v) { return v.toLocaleString('id-ID'); },
                        font: { family: 'Inter', size: 11 }
                    },
                    grid: { color: '#e2e8f0' }
                },
                x: {
                    grid: { display: false },
                    ticks: { font: { family: 'Inter', size: 11 } }
                }
            }
        }
    });
}

function formatNumber(n) {
    return n.toLocaleString('id-ID');
}

// Inisialisasi bahasa saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    setLanguage(currentLang);
    renderHistory(); // load history UI saat start
});
