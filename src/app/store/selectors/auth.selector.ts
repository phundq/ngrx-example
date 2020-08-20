import { AuthStateI } from './../reducers/auth.reducer';
import { createSelector } from '@ngrx/store';
import { AppState } from './../app-state';


export const loginInfo =   (state: AppState) => state.auth;
export const getLoginInfo = createSelector(loginInfo, (state: AuthStateI)=> state);