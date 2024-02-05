import { Component } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  newTodoTitle: string = "";
  newTodoDate: Date = new Date();

  todos: Todo[] = [];

  addTodo() {
    alert("Two-way data binding works!");
  }
}
