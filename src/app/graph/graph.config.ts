export class GraphConfig {
    lineChartOptions: any = {
        responsive: true,
        legend: {
            position: 'right'
        },
        scales: {
            yAxes: [
                {
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left'
                }
            ],
            xAxes: [
                {
                    type: 'time',
                    time: {
                        unit: 'day'
                    }
                }
            ]
        }
    };

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';
    public lineChartColors = [
        { // default blue
            backgroundColor: 'rgb(141, 206, 242, 0)',
            borderColor: '#27a2e6',
            pointBackgroundColor: '#27a2e6',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // purple 2
            backgroundColor: 'rgb(255, 204, 255,0)',
            borderColor: '#cc33ff',
            pointBackgroundColor: '#cc33ff',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },

        { // default turquoise
            backgroundColor: 'rgb(179, 230, 229, 0)',
            borderColor: '#56c7c6',
            pointBackgroundColor: '#56c7c6',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // grey
            backgroundColor: 'rgb(211, 215, 223,0)',
            borderColor: '#a0aab9',
            pointBackgroundColor: '#a0aab9',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // salmon
            backgroundColor: 'rgb(255, 230, 230,0)',
            borderColor: '#ff9999',
            pointBackgroundColor: '#ff9999',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // orange
            backgroundColor: 'rgb(255, 217, 179,0)',
            borderColor: '#ff9933',
            pointBackgroundColor: '#ff9933',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // pink
            backgroundColor: 'rgb(255, 204, 221,0)',
            borderColor: '#ff6699',
            pointBackgroundColor: '#ff6699',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // default orange
            backgroundColor: 'rgb(255, 231, 179, 0)',
            borderColor: '#ffd479',
            pointBackgroundColor: '#ffd479',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // purple
            backgroundColor: 'rgb(238, 204, 255,0)',
            borderColor: '#aa3ec6',
            pointBackgroundColor: '#aa3ec6',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // blue3
            backgroundColor: 'rgb(153, 230, 255,0)',
            borderColor: '#0099cc',
            pointBackgroundColor: '#0099cc',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },

        { // green 3
            backgroundColor: 'rgb(255, 238, 204,0)',
            borderColor: '#00b66c',
            pointBackgroundColor: '#009458',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // pink 2
            backgroundColor: 'rgb(255, 204, 255,0)',
            borderColor: '#ff99ff',
            pointBackgroundColor: '#ff99ff',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // blue 2
            backgroundColor: 'rgb(204, 217, 255,0)',
            borderColor: '#3366ff',
            pointBackgroundColor: '#3366ff',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // yellow 2
            backgroundColor: 'rgb(255, 238, 204,0)',
            borderColor: '#ffcc66',
            pointBackgroundColor: '#ffcc66',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // green 2
            backgroundColor: 'rgb(204, 255, 235,0)',
            borderColor: '#00bf72',
            pointBackgroundColor: '#00bf72',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
    ];
}