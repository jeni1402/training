import { Component, signal } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports:[ReactiveFormsModule,CommonModule],
  templateUrl: './app.html',

})
export class App {
  // protected readonly title = signal('filters-validators');
  form =new FormGroup ({
    name :new FormControl('',[Validators.required,Validators.minLength(3)]),
    email : new FormControl('',[Validators.required,Validators.email]),
    password :new FormControl('',[Validators.required,Validators.minLength(8)])

  });
  submitted =false;
  onsubmit(){
    if (this.form.valid){
    this.submitted=true;
    console.log(this.form.value);
    }
  };
}
