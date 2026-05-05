import { Component, signal } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@Component({
  standalone:true,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports:[FormsModule,ReactiveFormsModule,MatInputModule,MatButtonModule,MatTableModule,MatSnackBarModule]
})
export class App {
  users:any[]=[];
  form:any;
    displayedColumn : string[]=['name','email','action'];
  constructor(private fb :FormBuilder ,private snack :MatSnackBar){
  this.form =this.fb.group({
    name :[''],
    email :[''],
  });
}


  addUser (){
    this.users.push(this.form.value);
    this.form.reset();
    this.snack.open('user added ','close',{duration:2000 })
  }
  deleteUser(index :number){
    this.users.splice(index ,1);
    this.form.reset();
    this.snack.open('user deleted!','close',{duration :2000})
  }

}
