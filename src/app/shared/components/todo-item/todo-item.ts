import { Component, input, output } from '@angular/core';
import { Todo } from '../../../model/todo.type';
import { HighlightCompletedTodo } from '../../../directive/highlight-completed-todo';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [HighlightCompletedTodo, UpperCasePipe],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem {
  todo = input.required<Todo>();
  todoToggled = output<Todo>();

  todoClicked () {
    this.todoToggled.emit(this.todo())
  }
}
