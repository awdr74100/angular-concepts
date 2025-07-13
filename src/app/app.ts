import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from './shared/components/button/button';
import { Header } from './shared/components/header/header';
import { Counter } from "./shared/components/counter/counter";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, Header, Counter],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Signal Title');
  message = 'Hello World';
  buttonText = signal('Cancel');

  keyUpHandler(event: KeyboardEvent) {
    console.log(event);
  }
}
