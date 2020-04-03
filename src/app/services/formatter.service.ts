import {Injectable} from '@angular/core';
import {Region} from '../modeles/Region';

@Injectable({
    providedIn: 'root'
})
export class FormatterService {


    constructor() {
    }

    displayedRegions = ['France', 'Iran', 'Italy', 'US', 'Spain', 'United Kingdom', 'China/Hubei', 'Netherlands', 'Germany', 'Belgium', 'Japan'];
    activeRegions = ['France', 'Iran', 'US', 'Spain', 'Italy'];

    // Transform string date month/day/year to Date
    formatDate(mmddYY: String): Date {
        const MM_DD_YY = mmddYY.split('/');
        const mm = MM_DD_YY[0];
        const dd = MM_DD_YY[1];
        const YY = MM_DD_YY[2];
        return new Date(parseInt(YY), parseInt(mm) - 1, parseInt(dd));

    }

    // Return if graph is hidden by default
    isHidden(region: Region): boolean {
        return !(this.activeRegions.includes(region.country) && region.province === '');
    }

    // Return is country should be displayed
    // Only major affected countries are shown by default
    isVisible(region: Region): boolean {
        return this.displayedRegions.includes(region.name);
    }
}
