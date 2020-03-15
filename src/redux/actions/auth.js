import {
    AUTHENTICATE,
    AUTHENTICATE_FROM_MEMORY,
    AUTHENTICATE_FROM_MEMORY_FINISH,
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

export const authFromMemoryFinishAction = () => ({
    type: AUTHENTICATE_FROM_MEMORY_FINISH,
});

export const refreshTokensAction = () => ({
    type: REFRESH_TOKENS,
});
