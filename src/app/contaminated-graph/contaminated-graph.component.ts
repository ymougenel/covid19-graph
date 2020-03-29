import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../core/services/data.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Location} from '@angular/common';
import {frConfirmedCsv} from "../mock/covid_fr_confirmed";
import {Region} from "../models/Region";
import {FormatterService} from "../core/services/formatter.service";
import {MapperService} from "../core/services/mapper.service";
import { switchMap } from 'rxjs/operators';
import {Observable} from "rxjs";

@Component({
    selector: 'covid-contaminated-graph',
    templateUrl: './contaminated-graph.component.html',
    styleUrls: ['./contaminated-graph.component.scss']
})
export class ContaminatedGraphComponent implements OnInit {

    regions: Region[] = [];
    dates: Date[] = [];
    public lineChartData: Array<any>= [];
    public lineChartLabels: Array<any>= [];
    dataAvailable = false;
    status: String;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private dataService: DataService,
        private formatterService: FormatterService,
        private mapperService: MapperService,
        private location: Location) {
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
        let yaxis = [];
        let formatter = this.formatterService;
        this.regions.forEach(function (region: Region) {
            yaxis.push({data: region.values, label: formatter.formatLabel(region), hidden: formatter.isHidden(region)})
        });
        this.lineChartData = yaxis;
        this.dataAvailable = true;
    }

    public lineChartOptions: any = {
        responsive: true,
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
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
        // },
        // { // dark grey
        //     backgroundColor: 'rgba(77,83,96,0.2)',
        //     borderColor: 'rgba(77,83,96,1)',
        //     pointBackgroundColor: 'rgba(77,83,96,1)',
        //     pointBorderColor: '#fff',
        //     pointHoverBackgroundColor: '#fff',
        //     pointHoverBorderColor: 'rgba(77,83,96,1)'
        // },
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

}
