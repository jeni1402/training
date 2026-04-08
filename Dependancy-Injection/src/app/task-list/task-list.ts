import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css']
})
export class TaskListComponent {

  constructor(public taskService: TaskService) {}

  deleteTask(index: number) {
    this.taskService.deleteTask(index);
  }
}