import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  text = input('button text');
  disabled = signal(false);
}
