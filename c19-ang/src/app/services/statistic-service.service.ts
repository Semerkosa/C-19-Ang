import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISummaryDataModel } from '../models/summary-data.mode';

@Injectable({
  providedIn: 'root'
})
export class StatisticServiceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getSummaryData(): Observable<ISummaryDataModel> {
    return this.httpClient.get<ISummaryDataModel>('https://api.covid19api.com/summary');
  }
}
