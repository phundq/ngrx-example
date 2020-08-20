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

  constructor(private authService :AuthService, private router : Router, private store: Store<AppState>) {
    this.store.select(getLoginInfo).subscribe(x => {
      this.success = x.loginSuccess;
      this.fail = x.loginFail
    })
   }

  ngOnInit(): void {
  }
  
  success: boolean;
  fail: boolean;

  submit(data: any){
    this.authService.login(data)
    if(this.success == true){
      this.router.navigate(['/dashboard'])
    }
  }
}
