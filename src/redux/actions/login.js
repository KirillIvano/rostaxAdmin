// @flow

import {
    LOGIN_START,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FORGET,
    FORGET_LOGIN_ERROR,
} from '@/redux/names/login';
import {UserCreds} from '@/entities/auth/types';

export type loginStartActionType = {
    type: typeof LOGIN_START,
    payload: {
        body: UserCreds,
    },
}
export const loginStartAction = (body: UserCreds) => ({
    type: LOGIN_START,
    payload: {
        body,
    },
});

export type loginErrorActionType = {
    type: typeof LOGIN_ERROR,
    payload: {
        error: string,
    },
}
export const loginErrorAction = (error: string) => ({
    type: LOGIN_ERROR,
    payload: {
        error,
    },
});

export type loginSuccessActionType = {
    type: typeof LOGIN_SUCCESS,
}
export const loginSuccessAction = () => ({
    type: LOGIN_SUCCESS,
});

export type loginForgetActionType = {
    type: typeof LOGIN_FORGET,
}
export const loginForgetAction = () => ({
    type: LOGIN_FORGET,
});

export type forgetLoginErrorActionType = {
    type: typeof FORGET_LOGIN_ERROR,
}
export const forgetLoginErrorAction = () => ({
    type: FORGET_LOGIN_ERROR,
});
