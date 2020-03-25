// @flow

import {ofType} from 'redux-observable';
import {of, from} from 'rxjs';
import type {Observable} from 'rxjs';
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
import {register} from '@/services/auth';
import type {registerStartActionType} from '@/redux/actions/register';

const registerEpic = action$ =>
    action$.pipe(
        ofType(REGISTER_START),
        exhaustMap(
            ({payload: {body, hash}}: registerStartActionType) =>
                from(
                    register(hash, body),
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
