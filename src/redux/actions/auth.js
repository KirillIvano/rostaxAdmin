import {AUTHENTICATE} from '@/redux/names/auth';

export const authenticateAction = ({
    accessJwt,
    refreshJwt,
}) => ({
    type: AUTHENTICATE,
    accessJwt,
    refreshJwt,
});
