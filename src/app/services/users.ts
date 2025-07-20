import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Users {
  #http = inject(HttpClient);

  getUsers() {
    const url = `https://jsonplaceholder.typicode.com/users`;
    // const url = '/users';

    return lastValueFrom(this.#http.get<{ id: number; name: string }[]>(url));
  }

  getUser(userId: number) {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

    return lastValueFrom(this.#http.get<{ id: number; name: string }>(url));
  }

  createUser(user: { name: string }) {
    const url = `https://jsonplaceholder.typicode.com/users`;

    return lastValueFrom(this.#http.post(url, user));
  }
}
