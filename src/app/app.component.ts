import { Component } from '@angular/core';

const todos = [
  "Lern JS",
  "Lern Angular 2",
  "Lern React Js"
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Todo2';
  todos = todos;
}
