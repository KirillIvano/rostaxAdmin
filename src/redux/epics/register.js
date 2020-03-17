import {ofType} from 'redux-observable';
import {of, from} from 'rxjs';
import {
    mergeMap,
    exhaustMap,
} from 'rxjs/operators';

import {REGISTER_START} from '@/redux/names/register';
import {
    authenticateAction,
    saveTokenAction,
} from '@/redux/actions/auth';
import {
    registerErrorAction,
    registerSuccessAction,
} from '@/redux/actions/register';

const registerEpic = action$ => action$.pipe(
    ofType(REGISTER_START),
    exhaustMap(
        ({payload: {body, hash}}) =>
            from(
                fetch(`${SERVER_ORIGIN}/admin/auth/register/${hash}`,
                    {
                        body: JSON.stringify(body),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        method: 'POST',
                        credentials: 'include',
                    }).then(response => response.json()),
            )
                .pipe(
                    mergeMap(
                        ({ok, error, accessJwt, refreshJwt}) => {
                            if (!ok) {
                                return of(
                                    registerErrorAction(error),
                                );
                            }

                            return of(
                                authenticateAction({accessJwt, refreshJwt}),
                                saveTokenAction(refreshJwt),
                                registerSuccessAction(),
                            );
                        },
                    ),
                ),
    ),
);

export default registerEpic;
