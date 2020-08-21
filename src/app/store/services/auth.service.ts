import { getLoginInfo } from './../selectors/auth.selector';
import { LoginSuccess, LoginFail } from './../actions/auth.action';
import { AppState } from './../app-state';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Login } from '../actions/auth.action';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private store: Store<AppState>, public http: HttpClient) {

  }

  mockData = {
    username: "phu",
    password: "123456"
  }

  login(data: any): Observable<any> {
    if (data.username === this.mockData.username && data.password === this.mockData.password) {
      return this.http.get("https://5f213c23daa42f00166657d2.mockapi.io/user/1");
    }
    return this.http.get("https://5f213c23daa42f00166657d2.mockapi.io/user/0");
  }
}
