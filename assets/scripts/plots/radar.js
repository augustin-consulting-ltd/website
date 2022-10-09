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

const config = {
    type: 'radar',
    data: data_00,
    options: {
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
        }
    }
};

const chart = new Chart(
                document.getElementById('myChart'),
                config
            );
chart.options.elements.line.tension = value ? 0.4 : 0.000001;
chart.update();