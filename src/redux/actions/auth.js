import {
    AUTHENTICATE,
    AUTHENTICATE_FROM_MEMORY,
    REFRESH_TOKENS,
    SAVE_TOKENS,
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

export const saveTokensAction = ({
    accessJwt,
    refreshJwt,
}) => ({
    type: SAVE_TOKENS,
    payload: {
        accessJwt,
        refreshJwt,
    },
});

export const authFromMemoryAction = () => ({
    type: AUTHENTICATE_FROM_MEMORY,
});

export const refreshTokensAction = () => ({
    type: REFRESH_TOKENS,
});
