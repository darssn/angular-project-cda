import { Injectable } from '@angular/core';
import { Connexion_User } from 'src/constants/connexion';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(): User | undefined {
    return Connexion_User?.USER;
  }

  setUser(user: User): void {
    Connexion_User.USER = user;
  }

  deleteUser(){
    Connexion_User.USER  = undefined;
  }


}
