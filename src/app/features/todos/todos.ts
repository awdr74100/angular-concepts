import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Todos as TodosService } from '../../services/todos';
import { Todo } from '../../model/todo.type';
import { catchError } from 'rxjs';
import { TodoItem } from '../../shared/components/todo-item/todo-item';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '@/app/pipes/filter-todos-pipe';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { Users as UserService } from '@/app/services/users';

// import { FilterTodosPipe } from '../../pipes/filter-todos-pipe';
// import { NgIf } from '@angular/common';

@Component({
  selector: 'app-todos',
  // imports: [NgIf],
  imports: [TodoItem, FormsModule, FilterTodosPipe],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos implements OnInit, OnDestroy {
  todoService = inject(TodosService);
  todoItems = signal<Todo[]>([]);
  searchTerm = signal('');
  userService = inject(UserService);

  usersQuery = injectQuery(() => ({
    queryKey: ['users'],
    queryFn: () => this.userService.getUsers(),
    staleTime: Infinity,
  }));

  ngOnInit(): void {
    // console.log(this.todoService.todoItems);
    // this.todoItems.set(this.todoService.todoItems);
    this.todoService
      .getTodosFromApi()
      .pipe(catchError((err) => {
        console.log(err);
        throw err;
      }))
      .subscribe(todos => {
        this.todoItems.set(todos);
      });
  }

  updateTodoItem(todoItem: Todo) {
    this.todoItems.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }

        return todo;
      })
    })
  }

  ngOnDestroy(): void {
    console.log('destroy');
  }
}
