import { AuthAction, AuthActionE } from './../actions/auth.action';
export interface AuthStateI {
    login: boolean;
    loginSuccess: boolean;
    loginFail: boolean;
    username: string,
    fullName: string,
    accessToken: string

}

const initAuthState: AuthStateI = {
    login:false,
    loginSuccess:false,
    loginFail:false,
    username: '',
    fullName: '',
    accessToken: ''
}


export function authReducer(state = initAuthState, action: AuthAction){
    switch(action.type){
        case AuthActionE.LOGIN:
            console.log(1)
            return {...state, login: true};
        case AuthActionE.LOGIN_SUCCESS:
            return {...state, login: false, loginFail: false, loginSuccess: true, username: action.payload.username, fullName: action.payload.fullName};
        case AuthActionE.LOGIN_FAIL:
            return {...state, login: false, loginSuccess: false, username: '', fullName: '', loginFail: true};
        default:  return state;
    }

}