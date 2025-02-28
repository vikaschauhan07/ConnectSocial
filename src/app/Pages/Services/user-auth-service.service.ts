import { UserLogin } from '../Interface/user-login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserAuthServiceService {
  private apiUrl = environment.url;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService 
  ) { }
  login(credentials: UserLogin) {
    console.log(this.apiUrl)
    this.http
      .post(`${this.apiUrl}/api/v1/auth/authenticate`, credentials)
      .subscribe({
        complete: () => {},
        error: (error) => {
          this.toastr.error(error.error.message);
          return error;
        },
        next: (data: any) => {
          
          
        },
      });
  }
}
