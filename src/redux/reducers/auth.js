import {
    AUTHENTICATE,
} from '@/redux/names/auth';

const INITIAL_STATE = {
    accessToken: null,
    refreshToken: null,

    isAuthenticated: true,
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
        };
    }
    default: {
        return state;
    }
    }
};
