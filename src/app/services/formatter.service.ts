import {Injectable} from '@angular/core';
import {Region} from '../modeles/Region';

@Injectable({
    providedIn: 'root'
})
export class FormatterService {


    constructor() {
    }

    displayedRegions = ['France', 'Iran', 'Italy', 'US', 'Spain', 'United Kingdom', 'China/Hubei', 'Netherlands', 'Germany', 'Belgium', 'Japan'];
    activeRegions = ['France', 'US', 'Spain', 'Italy'];

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

    // Return the new cases array
    // (ie: the subtraction between two consecutive days)
    transformIntoNewCases(values: number[]): number[] {
        const difValues = [values[0]];
        var i;
        for (i = 1; i < values.length; i += 1) {
            difValues.push(values[i] - values[i - 1]);
        }
        return difValues;
    }
}
