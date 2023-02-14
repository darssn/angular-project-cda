import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/services/authService/auth.service';
import { ConnexionService } from 'src/services/connexionService/connexion.service';
import { UserService } from 'src/services/userService/user.service';
import { User } from 'src/models/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  auth!: FormGroup;
  isConnected$!: Observable<boolean>;
  user: User | undefined;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private connexionService: ConnexionService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      this.user = this.userService.getUser();
      this.connexionService.toggleConnect();
    }
    this.createForm();
    console.log('user : ' + this.userService.getUser());
    console.log('connected ? : ' + this.connexionService.getConnected());
    this.isConnected$ = of(this.connexionService.getConnected());
  }

  createForm() {
    this.auth = this.fb.group({
      mail: null,
      pwd: null,
    });
  }

  onSubmit() {
    let formPwd = this.auth.get('pwd')?.value;
    let formMail = this.auth.get('mail')?.value;
    this.authService.auth(formMail, formPwd);
    this.user = this.userService.getUser();
    if (this.connexionService.getConnected()) {
      this.createForm();
    }
    this.isConnected$ = of(this.connexionService.getConnected());
  }

  disconnect() {
    this.connexionService.disconnect();
    this.isConnected$ = of(this.connexionService.getConnected());
    localStorage.removeItem('user');
  }
}
