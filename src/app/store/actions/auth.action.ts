import { Action } from '@ngrx/store';


export enum AuthActionE{
    LOGIN = "[LOGIN] login ...",
    LOGIN_SUCCESS = "[LOGIN] login success",
    LOGIN_FAIL = "[LOGIN] login fail",
}

export class Login implements Action{
    public readonly type = AuthActionE.LOGIN
    constructor(public payload: {username: string, password: string}){}
}
export class LoginSuccess implements Action{
    public readonly type = AuthActionE.LOGIN_SUCCESS
    constructor(public payload: {fullName: string, username: string}){}
}
export class LoginFail implements Action{
    public readonly type = AuthActionE.LOGIN_FAIL
    constructor(){}
}

export type AuthAction = Login | LoginSuccess | LoginFail