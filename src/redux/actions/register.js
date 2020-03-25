import {
    REGISTER_START,
    REGISTER_ERROR,
    REGISTER_SUCCESS,
    FORGET_REGISTER_ERROR,
} from '@/redux/names/register';

export const registerStartAction = (
    body,
    hash,
) => ({
    type: REGISTER_START,
    payload: {
        body,
        hash,
    },
});

export const registerErrorAction = error => ({
    type: REGISTER_ERROR,
    payload: {
        error,
    },
});

export const registerSuccessAction = () => ({
    type: REGISTER_SUCCESS,
});

export const forgetRegisterErrorAction = () => ({
    type: FORGET_REGISTER_ERROR,
});
