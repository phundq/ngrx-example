import { LoginSuccess, LoginFail } from './../actions/auth.action';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Login, AuthActionE } from '../actions/auth.action';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthEffect {
    constructor(
        private actions$: Actions,
        private authService: AuthService
    ) { }

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActionE.LOGIN),
            exhaustMap((action: Login) =>
                this.authService
                    .login(action.payload).pipe(
                        map((result) =>{
                            console.log(result);
                            return  new LoginSuccess({username: result.username, fullName: result.fullName});
                        }),
                        catchError(err => {
                            console.log(err);
                            return of(new LoginFail());
                        })
                    )
                    )
            )
        )
}
