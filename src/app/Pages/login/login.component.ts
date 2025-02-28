import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UserLogin } from '../Interface/user-login';
import { UserAuthServiceService } from '../Services/user-auth-service.service';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private userAuthService: UserAuthServiceService) {}

  loginObj: any = {
    email: '',
    password: ''
  }

  loginUser(){
    let email = this.loginObj.email;
    let password = this.loginObj.password;
    let credentials = this.loginObj as  UserLogin;
    this.userAuthService.login(credentials);

  }
}
