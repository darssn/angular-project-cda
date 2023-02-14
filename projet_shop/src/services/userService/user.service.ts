import { Injectable } from '@angular/core';
import { Connexion_User } from 'src/constants/connexion';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUser(): User | undefined {
    let user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    } else {
      return Connexion_User.USER;
    }
  }

  setUser(user: User): void {
    Connexion_User.USER = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  deleteUser() {
    Connexion_User.USER = undefined;
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
  }
}
