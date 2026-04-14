import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../filter-pipe'
import { NameFormatPipe } from '../name-format-pipe';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterPipe, NameFormatPipe],
  templateUrl: './employee.component.html'
})
export class EmployeeComponent {

  searchText = '';

  employees = [
    { name: 'jenifer', salary: 50000, doj: new Date(2022, 5, 10) },
    { name: 'moni', salary: 70000, doj: new Date(2021, 3, 15) },
    { name: 'justin', salary: 60000, doj: new Date(2020, 7, 20) }
  ];
}