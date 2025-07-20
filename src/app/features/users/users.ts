import { Component, inject, signal } from '@angular/core';
import { injectMutation, injectQuery, QueryClient } from '@tanstack/angular-query-experimental';
// import { Users as UserService } from '../../services/users';
import { Users as UserService } from '@/app/services/users';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  userService = inject(UserService);
  userId = signal<number | null>(null);
  queryClient = inject(QueryClient);

  usersQuery = injectQuery(() => ({
    queryKey: ['users'],
    queryFn: () => this.userService.getUsers(),
  }));

  userQuery = injectQuery(() => ({
    enabled: !!this.userId(),
    queryKey: ['user', this.userId()],
    queryFn: () => this.userService.getUser(this.userId() ?? 1),
    staleTime: Infinity,
  }));

  userMutation = injectMutation(() => ({
    mutationFn: (user: { name: string }) => this.userService.createUser(user),
    // onSuccess(res) {
    //   console.log(res);
    // },
  }));

  createUser(user: { name: string }) {
    this.userMutation.mutate(user, {
      onSuccess: () => {
        this.queryClient.invalidateQueries({ queryKey: ['users'] });
      },
    });
  }
}
