import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: string[] = [];

  getTasks() {
    return this.tasks;
  }

  addTask(task: string) {
    if (task.trim()) {
      this.tasks.push(task);
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}