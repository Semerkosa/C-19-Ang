import { Component, OnInit } from '@angular/core';
import { ISummaryDataModel } from 'src/app/models/summary-data.mode';
import { StatisticServiceService } from 'src/app/services/statistic-service.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  
  summaryData: ISummaryDataModel | undefined;

  constructor(private statisticService: StatisticServiceService) {}

  ngOnInit(): void {
    this.statisticService.getSummaryData()
    .subscribe((resp) => {
      this.summaryData = resp;
    });
  }
}
