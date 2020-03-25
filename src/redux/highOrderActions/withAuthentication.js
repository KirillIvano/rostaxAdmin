import {WITH_AUTHENTICATION} from '@/redux/names/auth';
import type {Action} from 'redux';

export type withAuthenticationActionType = {
    type: typeof WITH_AUTHENTICATION,
    action: Action,
};

export const withAuthentication = action => ({
    type: WITH_AUTHENTICATION,
    action,
});
