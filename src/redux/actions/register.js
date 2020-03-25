// @flow

import {
    REGISTER_START,
    REGISTER_ERROR,
    REGISTER_SUCCESS,
    FORGET_REGISTER_ERROR,
} from '@/redux/names/register';
import {UserCreds} from '@/entities/auth/types';

export type registerStartActionType = {
    type: typeof REGISTER_START,
    payload: {
        body: UserCreds,
        hash: string,
    },
}
export const registerStartAction = (
    body: UserCreds,
    hash: string,
) => ({
    type: REGISTER_START,
    payload: {
        body,
        hash,
    },
});

export type registerErrorActionType = {
    type: typeof REGISTER_ERROR,
    payload: {
        error: string,
    },
}
export const registerErrorAction = (error: string) => ({
    type: REGISTER_ERROR,
    payload: {
        error,
    },
});

export type registerSuccessActionType = {
    type: typeof REGISTER_SUCCESS,
}
export const registerSuccessAction = () => ({
    type: REGISTER_SUCCESS,
});

export type forgetRegisterErrorActionType = {
    type: typeof FORGET_REGISTER_ERROR,
}
export const forgetRegisterErrorAction = () => ({
    type: FORGET_REGISTER_ERROR,
});
