import {Injectable} from '@angular/core';
import {MessageService} from "./message.service";
import {Observable} from "rxjs/Observable";
import {LoggerService} from "./logger/logger.service";
import {Region} from "../../models/Region";
import {FormatterService} from "./formatter.service";

@Injectable()
export class MapperService {

    constructor(private messageService: MessageService, private formatterService: FormatterService, private LOGGER: LoggerService) {
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
        for (let i = 1; i < lines.length; i++) {
            regions.push(this.mapRegion(lines[i]));
        }
        return regions;
    }

    mapCsvToDates(csv: String): Date[] {
        let lines = csv.split("\n");
        return this.mapDates(lines[0]).map((d) => this.formatterService.formatDate(d.toString()));
    }
}
