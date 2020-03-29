import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";
import {confirmedCsv} from "../mock/covid_confirmed";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  URL: String = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series";

  constructor(private _http: HttpClient) {
  }

  private getConfirmedCases(): Observable<String> {
    return this._http.get(`${this.URL}/time_series_covid19_confirmed_global.csv`, {responseType: 'text'});
  }

  private getDeaths(): Observable<String> {
    return this._http.get(`${this.URL}/time_series_covid19_deaths_global.csv`, {responseType: 'text'});
  }

  private getRecovered(): Observable<String> {
    return this._http.get(`${this.URL}/time_series_covid19_recovered_global.csv`, {responseType: 'text'});
  }

  private getMockedConfirmedCases(): Observable<String> {
    // return of(frConfirmedCsv)
    return of(confirmedCsv)
  }

  getData(status: String): Observable<String> {
    console.log("get data from status:" + status);
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
