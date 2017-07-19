import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../shared/todo";
import {TodoService} from "../shared/todo.service";



@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {
    this.todos = [];
  }

  toggle(todo: Todo) {
    this.todoService.toggleTodo(todo)
  }

  delete(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

}
