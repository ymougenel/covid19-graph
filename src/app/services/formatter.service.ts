import {Injectable} from '@angular/core';
import {Region} from '../modeles/Region';

@Injectable({
    providedIn: 'root'
})
export class FormatterService {


    constructor() {
    }

    displayedRegions = ['France', 'Italy', 'Iran', 'US', 'Spain', 'United Kingdom', 'China', 'Netherlands', 'Germany', 'Belgium'];
    activeRegions = ['France', 'Italy', 'Iran', 'US', 'Spain'];

    formatDate(mmddYY: string): Date {
        let mm_dd_YY = mmddYY.split('/');
        let mm = mm_dd_YY[0];
        let dd = mm_dd_YY[1];
        let YY = mm_dd_YY[2];
        return new Date(parseInt(YY), parseInt(mm), parseInt(dd));

    }

    formatLabel(region: Region): String {
        if (region.province) {
            return region.country + '/' + region.province;
        }
        else {
            return region.country;
        }
    }


    isHidden(region: Region): boolean {
        return !(this.activeRegions.includes(region.country) && region.province == '');
    }

    isVisible(region: Region): boolean {
        return this.displayedRegions.includes(region.country);
    }
}
