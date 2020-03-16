import {ofType} from 'redux-observable';
import {of, from} from 'rxjs';
import {
    catchError,
    mergeMap,
} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';

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
        mergeMap(
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
                            ({ok, error, accessJwt, refreshJwt}) => of(
                                authenticateAction({accessJwt, refreshJwt}),
                                saveTokenAction(refreshJwt),
                                loginSuccessAction(),
                            ),
                        ),
                    ),
        ),
    );


export default loginEpic;
