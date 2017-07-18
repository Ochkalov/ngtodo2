import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  title: string = "";
@Output() add = new EventEmitter();

  constructor() { }


  onSubmit() {
    this.add.emit(this.title);
  }

  ngOnInit() {
  }

}
