import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrls: ['./add-task.css']
})
export class AddTaskComponent {
  newTask = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    this.taskService.addTask(this.newTask);
    this.newTask = '';
  }
}