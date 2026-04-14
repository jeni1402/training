import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HighlightDirective, UnlessDirective],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  isVisible = true;
  isActive = false;

  items = ['Angular', 'React', 'Vue'];

  toggle() {
    this.isVisible = !this.isVisible;
  }

  toggleClass() {
    this.isActive = !this.isActive;
  }
}