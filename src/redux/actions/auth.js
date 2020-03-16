import {
    AUTHENTICATE,
    AUTHENTICATE_FROM_MEMORY,
    AUTHENTICATE_FROM_MEMORY_FINISH,
    APP_START_AUTH,
    APP_START_AUTH_ERROR,
    APP_START_AUTH_SUCCESS,
    REFRESH_TOKENS,
    SAVE_TOKEN,
} from '@/redux/names/auth';

export const authenticateAction = ({
    accessJwt,
    refreshJwt,
}) => ({
    type: AUTHENTICATE,
    payload: {
        accessJwt,
        refreshJwt,
    },
});

export const saveTokenAction = refreshJwt => ({
    type: SAVE_TOKEN,
    payload: {
        refreshJwt,
    },
});

export const authFromMemoryAction = () => ({
    type: AUTHENTICATE_FROM_MEMORY,
});

export const authFromMemoryFinishAction = () => ({
    type: AUTHENTICATE_FROM_MEMORY_FINISH,
});

export const refreshTokensAction = () => ({
    type: REFRESH_TOKENS,
});

export const appStartAuthAction = () => ({
    type: APP_START_AUTH,
});

export const appStartAuthErrorAction = () => ({
    type: APP_START_AUTH_ERROR,
});

export const appStartAuthSuccessAction = () => ({
    type: APP_START_AUTH_SUCCESS,
});
