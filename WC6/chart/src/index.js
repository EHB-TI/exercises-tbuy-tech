import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
} from 'chart.js';


Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
);

window.onload = () => {

    let config = null;
    let dungeons = null;
    let numberOfSpellss = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    function numberOfSpells(result) {
        result.forEach(element => {
            switch (element["level"].charAt(0)) {
                case "1":
                    numberOfSpellss[0]++;
                    break;
                case "2":
                    numberOfSpellss[1]++;
                    break;
                case "3":
                    numberOfSpellss[2]++;
                    break;
                case "4":
                    numberOfSpellss[3]++;
                    break;
                case "5":
                    numberOfSpellss[4]++;
                    break;
                case "6":
                    numberOfSpellss[5]++;
                    break;
                case "7":
                    numberOfSpellss[6]++;
                    break;
                case "8":
                    numberOfSpellss[7]++;
                    break;
                case "9":
                    numberOfSpellss[8]++;
                    break;
                default:
                    break;
            }

        });
        return numberOfSpellss;
    }

    let getData = async () => {
        let resp = await fetch('data.json');
        return await resp.json();
    }

    getData()
        //.then(result => loadMyChart(result))

    let getData2 = async () => {
        let resp = await fetch('d&d.json');
        return await resp.json();
    }

    getData2()
        .then(result => {
            loadMyChart2(result, numberOfSpells(result));
            return result;
        })


    function loadMyChart(config) {
        let ctx = document.getElementById('myChart').getContext('2d');
        let myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [config.courses[0]["name"], config.courses[1]["name"], config.courses[2]["name"], config.courses[3]["name"]],
                datasets: [{
                    label: '# of Votes',
                    data: [config.courses[0]["hype"], config.courses[1]["hype"], config.courses[2]["hype"], config.courses[3]["hype"]],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }


    function loadMyChart2(result, numberOfSpellss) {
        let ctxx = document.getElementById('dungeons').getContext('2d');
        let Chartjee = new Chart(ctxx, {
            type: 'bar',
            data: {
                labels: ['1th-level', '2th-level', '3th-level', '4th-level', '5th-level', '6th-level', '7th-level', '8th-level', '9th-level'],
                datasets: [{
                    label: '# of spells',
                    data: [numberOfSpellss[0], numberOfSpellss[1], numberOfSpellss[2], numberOfSpellss[3], numberOfSpellss[4], numberOfSpellss[5], numberOfSpellss[6], numberOfSpellss[7], numberOfSpellss[8]],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}

