import { Component, OnInit } from '@angular/core';
import {Todo} from "../shared/todo";
import {todos} from "../shared/data";


@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = todos;

  constructor() { }

  toggle(todo: Todo) {
    todo.completed = !todo.completed;
  }

  delete(todo: Todo) {
    let index = this.todos.indexOf(todo);

    if (index > 1) {
      this.todos.splice(index,1);
    }
  }

  ngOnInit() {
  }

}
