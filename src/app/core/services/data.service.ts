import {Injectable} from '@angular/core';
import {MessageService} from "./message.service";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {LoggerService} from "./logger/logger.service";
import {HttpClient, HttpResponse} from '@angular/common/http';
import {frConfirmedCsv} from "../../mock/covid_fr_confirmed";
import {confirmedCsv} from "../../mock/covid_confirmed";

@Injectable()
export class DataService {

    URL: String = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series";

    constructor(private messageService: MessageService, private LOGGER: LoggerService, private _http: HttpClient) {
    }

    private getConfirmedCases(): Observable<String> {
        this.messageService.add('Getting confimed cases');
        return this._http.get(`${this.URL}/time_series_covid19_confirmed_global.csv`, {responseType: 'text'});
    }

    private getDeaths(): Observable<String> {
        this.messageService.add('Getting deaths cases');
        return this._http.get(`${this.URL}/time_series_covid19_deaths_global.csv`, {responseType: 'text'});
    }

    private getRecovered(): Observable<String> {
        this.messageService.add('Getting recovered cases');
        return this._http.get(`${this.URL}/time_series_covid19_recovered_global.csv`, {responseType: 'text'});
    }

    private getMockedConfirmedCases(): Observable<String> {
        // return of(frConfirmedCsv)
        return of(confirmedCsv)
    }

    getData(status: String): Observable<String> {
        if (status == "confirmed") {
            return this.getConfirmedCases();
        } else if (status == "deaths") {
            return this.getDeaths();
        } else if (status == "recovered") {
            return this.getRecovered();
        }
        else {
            return this.getMockedConfirmedCases();
        }
    }
}
