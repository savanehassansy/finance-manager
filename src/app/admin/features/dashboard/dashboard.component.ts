import { Component,inject } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  imports: [
    NgxEchartsModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  isBrowser = false;   // Savoir si on est côté navigateur
  chartOptions = {}; 
  constructor() {
    const platformId = inject(PLATFORM_ID);
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      this.chartOptions = {
        title: {
          text: 'Evolution des Ventes'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Ventes',
            type: 'line',
            data: [150, 230, 224, 218, 135, 147],
            smooth: true
          }
        ]
      };
    }
  }
}







