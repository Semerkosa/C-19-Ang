import { Component, OnInit } from '@angular/core';
import { StatisticServiceService } from 'src/app/services/statistic-service.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor(
    private statisticService: StatisticServiceService
  ) { }

  ngOnInit(): void {
  }

}
