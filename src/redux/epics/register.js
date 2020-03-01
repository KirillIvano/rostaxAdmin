import {ofType} from 'redux-observable';
import {of} from 'rxjs';
import {
    catchError,
    mergeMap,
} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';

import {REGISTER_START} from '@/redux/names/register';
import {authenticateAction} from '@/redux/actions/auth';
import {
    registerErrorAction,
    registerSuccessAction,
} from '@/redux/actions/register';

export const registerEpic = action$ => action$.pipe(
    ofType(REGISTER_START),
    mergeMap(
        ({payload: {body, hash}}) =>
            ajax.post(`${SERVER_ORIGIN}/admin/auth/register/${hash}`, body)
                .pipe(
                    mergeMap(
                        ({response}) => of(
                            authenticateAction(response),
                            registerSuccessAction(),
                        ),
                    ),
                    catchError(
                        ({response}) => {
                            const {error} = response;

                            return of(registerErrorAction(error));
                        },
                    ),
                ),
    ),
);
