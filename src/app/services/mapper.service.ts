import {Injectable} from '@angular/core';
import {FormatterService} from "./formatter.service";
import {Region} from "../modeles/Region";

@Injectable({
  providedIn: 'root'
})
export class MapperService {

  constructor(private formatterService: FormatterService) {
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

  mapCsvToRegions(csv: String): Region[] {
    let lines = csv.split("\n");
    let regions: Region[] = [];
    for (let i = 1; i < lines.length - 1; i++) {
      regions.push(this.mapRegion(lines[i]));
    }
    return regions;
  }

  mapCsvToDates(csv: String): Date[] {
    let lines = csv.split("\n");
    return this.mapDates(lines[0]).map((d) => this.formatterService.formatDate(d.toString()));
  }
}
