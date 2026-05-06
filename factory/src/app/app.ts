import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone :true,
  imports: [MatToolbarModule,MatCardModule,CommonModule],
  templateUrl: './app.html',
  styleUrls:['./app.css']
})
export class App {
  constructor(@Inject('THEME') public theme :string){}
  
}
