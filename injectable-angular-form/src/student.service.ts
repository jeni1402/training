import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentList: any[] = [];

  addStudent(studentData: any) {
    this.studentList.push(studentData);
  }

  getStudents() {
    return this.studentList;
  }

}