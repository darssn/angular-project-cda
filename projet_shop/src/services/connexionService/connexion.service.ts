import { Injectable } from '@angular/core';
import { Connexion_User } from 'src/constants/connexion';
import { userMock } from 'src/mocks/user_mock';

import { User } from 'src/models/user';
import { UserService } from '../userService/user.service';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  users: User[] = userMock;

  constructor(
    private userService: UserService
  ) { }

  toConnect(mailEntry: string, pwdEntry: string ): void{

    for (let user of this.users) {
      if (mailEntry === user.mail && user.pwd === pwdEntry) {
        this.toggleConnect();
        this.userService.setUser(user);
      }
    }
  }

  disconnect(): void{
      this.toggleConnect();
      this.userService.deleteUser();
  }

  getConnected():boolean{
    return Connexion_User?.USER_CONNECT;
  }

  toggleConnect(): void {
    Connexion_User.USER_CONNECT = !Connexion_User.USER_CONNECT;
  }
}
