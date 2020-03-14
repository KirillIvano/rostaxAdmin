import {
    AUTHENTICATE,
    AUTHENTICATE_FROM_MEMORY,
    REFRESH_TOKENS,
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

export const authFromMemoryAction = () => ({
    type: AUTHENTICATE_FROM_MEMORY,
});

export const refreshTokensAction = () => ({
    type: REFRESH_TOKENS,
});
