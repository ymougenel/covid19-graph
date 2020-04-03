import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../services/data.service';
import {FormatterService} from '../services/formatter.service';
import {Region} from '../modeles/Region';
import {MapperService} from '../services/mapper.service';

@Component({
    selector: 'app-graph',
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

    regions: Region[] = [];
    addedRegion: Region;
    dates: Date[] = [];
    public lineChartData: Array<any> = [];
    public lineChartLabels: Array<any> = [];
    dataAvailable = false;
    status: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private dataService: DataService,
        private formatterService: FormatterService,
        private mapperService: MapperService) {
    }

    ngOnInit() {
        this.status = this.route.snapshot.paramMap.get('status');
        this.fetchData();
    }

    fetchData(): void {
        this.dataService.getData(this.status)
            .subscribe(csv => {
                this.dates = this.mapperService.mapCsvToDates(csv);
                this.regions = this.mapperService.mapCsvToRegions(csv);
                this.createGraph();
            });
    }

    createGraph() {
        this.lineChartLabels = this.dates;
        const yaxis = [];
        const formatter = this.formatterService;
        this.regions.forEach((region: Region) => {
            if (formatter.isVisible(region)) {
                yaxis.push({data: region.values, label: region.name, hidden: formatter.isHidden(region)});

            }
        });
        this.lineChartData = yaxis;
        this.dataAvailable = true;
    }

    public lineChartOptions: any = {
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
    public lineChartColors: Array<any> = [
    ];
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

    public addRegion(selection) {
        console.log(selection);
        const region = this.regions.find(region => region.name === selection);
        this.lineChartData.push({data: region.values, label: region.name, hidden: false});
    }
}
