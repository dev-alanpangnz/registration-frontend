import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAccount } from '../model/userAccount';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class PostDataToApiService {

  constructor(private http: HttpClient) {}

  registerUser(user: UserAccount): Observable<any> {
    return this.http.post('http://localhost:8080/account', {
      userName: user.username,
      email: user.email,
      password: user.password,
      emailVerified: 'false',
    });
  }

  updateEmailVerification(user: UserAccount): Observable<any> {
    return this.http.put('http://localhost:8080/account/verify', {
      userName: user.username,
      verificationCode: user.verificationToken
    });
  }

  logInToAccount(user: UserAccount): Observable<any> {
    return this.http.post('http://localhost:8080/account/login', {
      userName: user.username,
      password: user.password
    });
  }

  updateEmail(user: UserAccount): Observable<any> {
    return this.http.put('http://localhost:8080/account/email', {
      userName: user.username,
      email: user.email
    });
  }

  updatePassword(user: UserAccount): Observable<any> {
    return this.http.put('http://localhost:8080/account/password', {
      userName: user.username,
      password: user.password
    });
  }

  resendVerificationCode(user: UserAccount): Observable<any> {
    return this.http.post('http://localhost:8080/account/verify', {
      userName: user.username
    });
  }
}
