import { Login } from './../../../store/actions/auth.action';
import { getLoginInfo } from './../../../store/selectors/auth.selector';
import { AppState } from './../../../store/app-state';
import { Store } from '@ngrx/store';
import { AuthService } from './../../../store/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService :AuthService, private store: Store<AppState>) {
    this.store.select(getLoginInfo).subscribe(x => {
      this.success = x.loginSuccess;
      this.fail = x.loginFail;
      this.login = x.login;
      if(this.success == true){
        this.router.navigate(['/dashboard'])
      }
    })  
   }

  ngOnInit(): void {
  }
  
  success: boolean;
  fail: boolean;
  login: boolean;

  submit(data: any){
    this.store.dispatch(new Login(data));
  }
}
