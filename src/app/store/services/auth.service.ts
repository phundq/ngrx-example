import { getLoginInfo } from './../selectors/auth.selector';
import { LoginSuccess, LoginFail } from './../actions/auth.action';
import { AppState } from './../app-state';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Login } from '../actions/auth.action';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  username: string = "phu"
  password: string = "123456"

  constructor(private store: Store<AppState>) { 

  }

  login(data: any): boolean{


    this.store.dispatch(new Login());
    
    if(data.username === this.username && data.password === this.password){
      this.store.dispatch(new LoginSuccess(data));
      return true
    }
    else{
      this.store.dispatch(new LoginFail());
      return false
    }
  }
}
