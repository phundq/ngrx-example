import { AuthStateI, authReducer } from './reducers/auth.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    auth: AuthStateI
}
export const appReducer: ActionReducerMap<AppState> = {
    auth: authReducer
};

