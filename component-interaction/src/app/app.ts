import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductCard } from './product-card/product-card';

@Component({
  selector: 'app-root',
  imports: [CommonModule,ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('component-interaction');
  product=[{name :"laptop", price :40000,brand:"HP"},
    {name :"phone",price:20000 , brand:"MI"},
  {name :"speaker",price:4000,brand:"lenova"}];
}
