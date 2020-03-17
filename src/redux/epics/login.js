import {ofType} from 'redux-observable';
import {of, from} from 'rxjs';
import {
    mergeMap, exhaustMap,
} from 'rxjs/operators';

import {LOGIN_START} from '@/redux/names/login';
import {
    authenticateAction,
    saveTokenAction,
} from '@/redux/actions/auth';
import {
    loginErrorAction,
    loginSuccessAction,
} from '@/redux/actions/login';

const loginEpic = action$ =>
    action$.pipe(
        ofType(LOGIN_START),
        exhaustMap(
            ({payload: {body}}) =>
                from(
                    fetch(`${SERVER_ORIGIN}/admin/auth/login`,
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
                                        loginErrorAction(error),
                                    );
                                }

                                return of(
                                    authenticateAction({accessJwt, refreshJwt}),
                                    saveTokenAction(refreshJwt),
                                    loginSuccessAction(),
                                );
                            },
                        ),
                    ),
        ),
    );


export default loginEpic;
