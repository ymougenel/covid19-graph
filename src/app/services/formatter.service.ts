import {Injectable} from '@angular/core';
import {Region} from '../modeles/Region';

@Injectable({
    providedIn: 'root'
})
export class FormatterService {


    constructor() {
    }

    displayedRegions = ['France', 'France/Mayotte', 'Italy', 'Iran', 'US', 'Spain', 'United Kingdom', 'China/Hubei', 'Netherlands', 'Germany', 'Belgium', 'Austria', 'Brazil', 'Canada/Quebec', 'Chile', 'Czechia', 'Equador','Denmark', 'Japan', 'Korea, South', 'Sweden', 'Nroway', 'Switzerland', 'Canade/Ontario'];
    activeRegions = ['France', 'Italy', 'Iran', 'US', 'Spain'];

    // Transform string date month/day/year to Date
    formatDate(mmddYY: String): Date {
        const MM_DD_YY = mmddYY.split('/');
        const mm = MM_DD_YY[0];
        const dd = MM_DD_YY[1];
        const YY = MM_DD_YY[2];
        return new Date(parseInt(YY), parseInt(mm) - 1, parseInt(dd));

    }

    formatLabel(region: Region): string {
        if (region.province) {
            return region.country + '/' + region.province;
        }
        else {
            return region.country;
        }
    }


    // Return if graph is hidden by default
    isHidden(region: Region): boolean {
        return !(this.activeRegions.includes(region.country) && region.province === '');
    }

    // Return is country should be displayed
    // Only major affected countries are shown by default
    isVisible(region: Region): boolean {
        return this.displayedRegions.includes(this.formatLabel(region));
    }
}
