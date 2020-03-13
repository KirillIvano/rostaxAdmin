import {
    AUTHENTICATE,
    CHECK_AUTHENTICATION,
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

export const checkAuthAction = () => ({
    type: CHECK_AUTHENTICATION,
});
