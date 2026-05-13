import { Component } from '@angular/core';
import { StudentChartComponent } from './student-chart/student-chart';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentChartComponent],
  template: `
    <app-student-chart></app-student-chart>
  `
})
export class AppComponent {}