import { AuthAction, AuthActionE } from './../actions/auth.action';
export interface AuthStateI {
    login: boolean;
    loginSuccess: boolean;
    loginFail: boolean;
    username: string

}

const initAuthState: AuthStateI = {
    login:false,
    loginSuccess:false,
    loginFail:false,
    username: ''
}


export function authReducer(state = initAuthState, action: AuthAction){
    switch(action.type){
        case AuthActionE.LOGIN:
            console.log(1)
            return {...state, login: true};
        case AuthActionE.LOGIN_SUCCESS:
            return {...state, login: true, loginSuccess: true, username: action.payload.username};
        case AuthActionE.LOGIN_FAIL:
            return {...state, login: true, loginSuccess: false, username: '', loginFail: true};
        default:  return state;
    }

}