import {ofType} from 'redux-observable';
import {of} from 'rxjs';
import {
    catchError,
    mergeMap,
} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';

import {LOGIN_START} from '@/redux/names/login';
import {authenticateAction} from '@/redux/actions/auth';
import {
    loginErrorAction,
    loginSuccessAction,
} from '@/redux/actions/login';

export const loginEpic = action$ => action$.pipe(
    ofType(LOGIN_START),
    mergeMap(
        ({payload: {body}}) =>
            ajax.post(`${SERVER_ORIGIN}/admin/auth/login`, body)
                .pipe(
                    mergeMap(
                        ({response}) => of(
                            authenticateAction(response),
                            loginSuccessAction(),
                        ),
                    ),
                    catchError(
                        ({response}) => {
                            const {error} = response;

                            return of(loginErrorAction(error));
                        },
                    ),
                ),
    ),
);
