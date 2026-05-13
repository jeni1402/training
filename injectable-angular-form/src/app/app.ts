import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../src/student.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],

  template: `
  
    <div class="box">

      <h2>Student Form</h2>

      <form (ngSubmit)="saveStudent()">

        <input
          type="text"
          placeholder="Student Name"
          [(ngModel)]="studentName"
          name="studentName"
        >

        <input
          type="number"
          placeholder="Student Age"
          [(ngModel)]="studentAge"
          name="studentAge"
        >

        <input
          type="text"
          placeholder="Course"
          [(ngModel)]="studentCourse"
          name="studentCourse"
        >

        <button type="submit">
          Save
        </button>

      </form>

      <hr>

      <h3>Students List</h3>

      <div *ngFor="let student of students">

        <p>
          {{ student.name }}
          -
          {{ student.age }}
          -
          {{ student.course }}
        </p>

      </div>

    </div>

  `,

  styles: [`

    .box{
      width:400px;
      margin:30px auto;
    }

    input{
      width:100%;
      padding:10px;
      margin-bottom:10px;
    }

    button{
      padding:10px 20px;
      background-color:green;
      color:white;
      border:none;
    }

  `]

})
export class AppComponent {

  studentName = '';
  studentAge = '';
  studentCourse = '';

  students: any[] = [];

  constructor(private studentService: StudentService) {}

  saveStudent() {

    const newStudent = {
      name: this.studentName,
      age: this.studentAge,
      course: this.studentCourse
    };

    this.studentService.addStudent(newStudent);

    this.students = this.studentService.getStudents();

    // clear input fields

    this.studentName = '';
    this.studentAge = '';
    this.studentCourse = '';

  }

}