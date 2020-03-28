import {Injectable} from '@angular/core';
import {MessageService} from "./message.service";
import {Observable} from "rxjs/Observable";
import {LoggerService} from "./logger/logger.service";
import {Region} from "../../models/Region";

@Injectable()
export class FormatterService {

  constructor(private messageService: MessageService, private LOGGER: LoggerService) {
  }


    formatDate(mmddYY: string): Date {
        let mm_dd_YY = mmddYY.split('/');
        let mm = mm_dd_YY[0];
        let dd = mm_dd_YY[1];
        let YY = mm_dd_YY[2];
        return new Date(parseInt(YY), parseInt(mm), parseInt(dd));

    }

    formatLabel(region: Region): String {
        if(region.province) {
            return region.country + '/' + region.province;
        }
        else {
            return region.country;
        }
    }

}
