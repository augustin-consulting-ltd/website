const data_00 = {
    labels: [
        /*'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running'*/

        /*'Strategic Value',
        'Innovation', 
        'Sustainability', 
        'Core Competency', 
        'Investment', 
        'Core Value', 
        'Risk'*/

        /*GDP*/
        'Consumption', 
        'Investment', 
        'Spending', 
        'Exports', 
        'Imports', 
        'X', 
        'Y'
    ],
    datasets: [{
        label: 'Country A',
        data: [65, 59, 90, 81, 56, 55, 60],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
        label: 'Country B',
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
};

const data_01 = {
    labels: [
        /*GDP*/
        'Consumption', 
        'Investment', 
        'Spending', 
        'Exports', 
        'Imports', 
    ],
    datasets: [{
        label: 'Country A',
        data: [65, 59, 90, 81, 56],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
        label: 'Country B',
        data: [28, 48, 40, 19, 96],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
};

function getRadarOptions() {
    const style = getComputedStyle(document.documentElement);
    return {
        tension: 0.2, 
        elements: {
            line: {
                borderWidth: 3
            }
        }, 
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            r: {
                angleLines: {
                    color: style.getPropertyValue('--radar-angle-line').trim() || 'rgba(0, 0, 0, 0.3)'
                },
                grid: {
                    color: style.getPropertyValue('--radar-grid-line').trim() || 'rgba(0, 0, 0, 0.1)'
                },
                pointLabels: {
                    color: style.getPropertyValue('--radar-point-label').trim() || '#333',
                    font: {
                        size: 14
                    }
                },
                ticks: {
                    display: false, 
                    color: style.getPropertyValue('--radar-tick-label').trim() || '#666',
                    backdropColor: 'transparent'
                }
            }
        }
    };
}

window.__radarCharts = window.__radarCharts || [];

function initRadarCharts() {
    document.querySelectorAll('.cta-chart').forEach((canvas) => {
        if (Chart.getChart(canvas)) return;

        const chart = new Chart(canvas, {
            type: 'radar',
            data: data_00,
            options: getRadarOptions()
        });

        window.__radarCharts.push({ chart, getRadarOptions });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRadarCharts);
} else {
    initRadarCharts();
}
