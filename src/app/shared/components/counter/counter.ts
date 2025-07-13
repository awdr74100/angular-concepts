import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count = signal(0);

  increment(n: number) {
    this.count.set(this.count() + n);
  }

  decrement(n: number) {
    this.count.update((val) => val - n);
    // this.count.set(this.count() - n);
  }

  reset() {
    // this.count.set(0)
    this.count.update(() => 0);
  }
}
