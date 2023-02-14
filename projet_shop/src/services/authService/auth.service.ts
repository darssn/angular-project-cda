import { Injectable } from '@angular/core';
import { ConnexionService } from '../connexionService/connexion.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(
    private connexionService: ConnexionService
  ) { }

  auth(mailEntry: string, pwdEntry: string ){
    this.connexionService.toConnect(mailEntry,pwdEntry);
  }


  








}
