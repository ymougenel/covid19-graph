import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../core/services/data.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
import {frConfirmedCsv} from "../mock/covid_fr_confirmed";
import {Region} from "../models/Region";
import {FormatterService} from "../core/services/formatter.service";

@Component({
    selector: 'covid-contaminated-graph',
    templateUrl: './contaminated-graph.component.html',
    styleUrls: ['./contaminated-graph.component.scss']
})
export class ContaminatedGraphComponent implements OnInit {

    regions: Region[] = [];
    dates: String[] = [];
    public lineChartData: Array<any>;
    public lineChartLabels: Array<any>;

    constructor(
        private route: ActivatedRoute,
        private dataService: DataService,
        private formatterService: FormatterService,
        private location: Location) {
    }

    ngOnInit() {
        this.getConfirmedCases();
    }

    getConfirmedCases(): void {
        this.dataService.getMockedConfirmedCases()
            .subscribe(confirmedCsv => {

                let lines = confirmedCsv.split("\n");
                console.log(lines);
                this.dates = this.mapDates(lines[0]);
                for (let i = 1; i < lines.length; i++) {
                    this.regions.push(this.mapRegion(lines[i]));
                }
                this.createGraph();
            });
    }

    mapRegion(line): Region {
        let region = new Region();
        line = line.split(',');
        region.province = line[0];
        region.country = line[1];
        region.latitude = line[2];
        region.longitude = line[3];
        region.values = line.slice(4, line.length);
        return region;
    }

    mapDates(line): string[] {
        line = line.split(',').slice(4, line.length);
        return line;
    }


    createGraph() {
        console.log("dates:");
        console.log(this.dates);
        console.log("regions:");
        console.log(this.regions);
        this.lineChartLabels = this.dates.map((d) => this.formatterService.formatDate(d.toString()));
        let yaxis = [];
        let formatter = this.formatterService;
        this.regions.forEach(function (region: Region) {
            yaxis.push({data: region.values, label: formatter.formatLabel(region), hidden: formatter.isHidden(region)})
        });
        this.lineChartData = yaxis;
        // console.log(this.lineChartData);
        // console.log(this.lineChartLabels);
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
