import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from './shared/components/button/button';
import { Header } from './shared/components/header/header';
import { Counter } from './shared/components/counter/counter';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, Header, Counter],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('Signal Title');
  message = 'Hello World';
  buttonText = signal('Cancel');

  keyUpHandler(event: KeyboardEvent) {
    console.log(event);
  }

  ngOnInit(): void {
    console.log(environment.apiUrl);
  }
}
