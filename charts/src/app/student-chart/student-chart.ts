import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import {
  ChartConfiguration,
} from 'chart.js';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-student-chart',
  standalone: true,
  imports: [BaseChartDirective],

  templateUrl: './student-chart.html',
})
export class StudentChartComponent {

  public barChartType: 'bar' = 'bar';

  public barChartLabels: string[] = [
    'Arun',
    'Priya',
    'John',
    'Kavin',
    'Sara'
  ];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: this.barChartLabels,
    datasets: [
      {
        data: [85, 92, 78, 96, 88],
        label: 'Student Marks'
      }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };

}