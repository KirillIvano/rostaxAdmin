import {
    AUTHENTICATE,
    AUTHENTICATE_FROM_MEMORY_FINISH,
    REFRESH_TOKENS_ERROR,
} from '@/redux/names/auth';

const INITIAL_STATE = {
    accessJwt: null,
    refreshJwt: null,
    isAuthenticated: false,
    authFromMemoryFinished: false,
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
    case REFRESH_TOKENS_ERROR: {
        return {
            ...state,
            isAuthenticated: false,
        };
    }
    case AUTHENTICATE_FROM_MEMORY_FINISH: {
        return {
            ...state,
            authFromMemoryFinished: true,
        };
    }
    default: {
        return state;
    }
    }
};
