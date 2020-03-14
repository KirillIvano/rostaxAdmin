import {
    AUTHENTICATE,
    REFRESH_TOKENS_ERROR,
} from '@/redux/names/auth';

const INITIAL_STATE = {
    accessJwt: null,
    refreshJwt: null,
    isAuthenticated: false,
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
    default: {
        return state;
    }
    }
};
