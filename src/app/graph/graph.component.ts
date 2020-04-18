import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../services/data.service';
import {FormatterService} from '../services/formatter.service';
import {Region} from '../modeles/Region';
import {MapperService} from '../services/mapper.service';
import {GraphConfig} from './graph.config';

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
    graphConfig: GraphConfig = new GraphConfig();

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



    public addRegion(selection) {
        const region = this.regions.find(region => region.name === selection);
        this.lineChartData.push({data: region.values, label: region.name, hidden: false});
        this.graphConfig.lineChartColors.push(this.graphConfig.lineChartColors[this.lineChartData.length]);
    }

}
