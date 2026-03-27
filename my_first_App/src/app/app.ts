
import { bootstrapApplication } from "@angular/platform-browser";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgIf } from "@angular/common";

@Component({
  imports:[NgIf,FormsModule],
  selector: 'app-root',
  standalone: true,
  templateUrl:"./app.html",
  styleUrls:["./app.css"],

})
export class App {
  name = '';
  src = 'src/assests/be late for the meeting vector.jpeg';
  title ="Sample";

  showMessage() {
    alert("Welcome");
  }
}

bootstrapApplication(App).catch(error => console.log(error));
