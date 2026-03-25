
import { bootstrapApplication } from "@angular/platform-browser";
import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hi I'm {{ name }}</h1>
    <p>I'm creating a very simple app from scratch</p>

    <img [src]="src" width="200">

    <button (click)="showMessage()">Click Me!</button>
  `
})
export class App {
  name = 'jeni';
  src = 'src/assests/be late for the meeting vector.jpeg';

  showMessage() {
    alert("Welcome");
  }
}

bootstrapApplication(App).catch(error => console.log(error));
