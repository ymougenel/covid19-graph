import {Injectable} from '@angular/core';
import {FormatterService} from './formatter.service';
import {Region} from '../modeles/Region';

@Injectable({
    providedIn: 'root'
})
export class MapperService {

    constructor(private formatterService: FormatterService) {
    }

    // Map csv line to Region
    private mapRegion(line): Region {
        const region = new Region();
        line = line.split(',');
        region.province = line[0];
        region.country = line[1];
        region.name = (region.province ? region.country + '/' + region.province : region.country);
        region.latitude = line[2];
        region.longitude = line[3];
        region.values = line.slice(4, line.length);
        return region;
    }

    // Map csv content into Regions
    mapCsvToRegions(csv: String): Region[] {
        const lines = csv.split('\n');
        const regions: Region[] = [];
        for (let i = 1; i < lines.length - 1; i++) {
            regions.push(this.mapRegion(lines[i]));
        }
        return regions;
    }

    // Return all dates from csv header
    mapCsvToDates(csv: String): Date[] {
        const header = csv.split('\n')[0];
        const dates = header.split(',').slice(4, header.length);
        return dates.map((d) => this.formatterService.formatDate(d.toString()));
    }
}
