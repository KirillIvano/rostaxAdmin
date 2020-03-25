// @flow

import {
    AUTHENTICATE,

    SAVE_TOKEN,

    APP_START_AUTH,
    APP_START_AUTH_ERROR,
    APP_START_AUTH_SUCCESS,

    REFRESH_TOKENS_ERROR,
    REFRESH_TOKENS_ERROR_HANDLED,
} from '@/redux/names/auth';

export type authenticateActionType = {
    type: typeof AUTHENTICATE,
    payload: {
        accessJwt: string,
        refreshJwt: string,
    },
}
export const authenticateAction = ({
    accessJwt,
    refreshJwt,
}: {
    accessJwt: string,
    refreshJwt: string,
}) => ({
    type: AUTHENTICATE,
    payload: {
        accessJwt,
        refreshJwt,
    },
});

export type saveTokenActionType = {
    type: typeof SAVE_TOKEN,
    payload: {
        refreshJwt: string,
    }
};
export const saveTokenAction = (refreshJwt: string) => ({
    type: SAVE_TOKEN,
    payload: {
        refreshJwt,
    },
});

export type refreshTokensErrorActionType = {
    type: typeof REFRESH_TOKENS_ERROR,
};
export const refreshTokensError = () => ({
    type: REFRESH_TOKENS_ERROR,
});

export type refreshTokensErrorEndActionType = {
    type: typeof REFRESH_TOKENS_ERROR_HANDLED,
};
export const refreshTokensErrorEnd = () => ({
    type: REFRESH_TOKENS_ERROR_HANDLED,
});

export type appStartAuthActionType = {
    type: typeof APP_START_AUTH,
};
export const appStartAuthAction = () => ({
    type: APP_START_AUTH,
});

export type appStartAuthErrorActionType = {
    type: typeof APP_START_AUTH_ERROR,
};
export const appStartAuthErrorAction = () => ({
    type: APP_START_AUTH_ERROR,
});

export type appStartAuthSuccessActionType = {
    type: typeof APP_START_AUTH_ERROR,
};
export const appStartAuthSuccessAction = () => ({
    type: APP_START_AUTH_SUCCESS,
});
