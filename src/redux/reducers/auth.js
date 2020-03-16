import {
    AUTHENTICATE,
    REFRESH_TOKENS_ERROR,
    APP_START_AUTH_ERROR,
    APP_START_AUTH_SUCCESS,
} from '@/redux/names/auth';

const INITIAL_STATE = {
    accessJwt: null,
    refreshJwt: null,
    isAuthenticated: false,
    isInitialAuthFinished: false,
};

export const authReducer = (
    state=INITIAL_STATE,
    action,
) => {
    const {type, payload} = action;

    switch (type) {
    case AUTHENTICATE: {
        const {
            accessJwt,
            refreshJwt,
        } = payload;

        return {
            ...state,
            accessJwt,
            refreshJwt,
            isAuthenticated: true,
        };
    }
    case APP_START_AUTH_ERROR: {
        return {
            ...state,
            isAuthenticated: false,
            isInitialAuthFinished: true,
        };
    }
    case APP_START_AUTH_SUCCESS: {
        return {
            ...state,
            isAuthenticated: true,
            isInitialAuthFinished: true,
        };
    }
    case REFRESH_TOKENS_ERROR: {
        return {
            ...state,
            isAuthenticated: false,
        };
    }
    default: {
        return state;
    }
    }
};
