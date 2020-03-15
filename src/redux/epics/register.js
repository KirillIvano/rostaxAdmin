import {ofType} from 'redux-observable';
import {of} from 'rxjs';
import {
    catchError,
    mergeMap,
    exhaustMap,
} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';

import {REGISTER_START} from '@/redux/names/register';
import {
    authenticateAction,
    saveTokensAction,
} from '@/redux/actions/auth';
import {
    registerErrorAction,
    registerSuccessAction,
} from '@/redux/actions/register';

const registerEpic = action$ => action$.pipe(
    ofType(REGISTER_START),
    exhaustMap(
        ({payload: {body, hash}}) =>
            ajax.post(`${SERVER_ORIGIN}/admin/auth/register/${hash}`, body)
                .pipe(
                    mergeMap(
                        ({response}) => of(
                            authenticateAction(response),
                            saveTokensAction(),
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

export default registerEpic;
