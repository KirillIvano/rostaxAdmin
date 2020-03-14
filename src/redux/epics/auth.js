import {
    ofType,
    combineEpics,
} from 'redux-observable';
import {of, from} from 'rxjs';
import {
    switchMap,
    map,
    tap,
    exhaustMap,
    mergeMap,
} from 'rxjs/operators';

import {
    AUTHENTICATE,
    REFRESH_TOKENS_ERROR,
    AUTHENTICATE_FROM_MEMORY,
    WITH_AUTHENTICATION,
    REFRESH_TOKENS,
} from '@/redux/names/auth';
import {getJwtPayload} from '@/helpers/jwt';
import {selectRefreshJwt, selectAccessJwt} from '@/redux/selectors/auth';
import {authenticateAction, refreshTokensAction} from '@/redux/actions/auth';
import {emptyAction} from '@/redux/actions/empty';

const authenticateEpic =
    action$ =>
        action$.pipe(
            ofType(AUTHENTICATE),
            tap(({payload}) => {
                const {refreshJwt, accessJwt} = payload;

                localStorage.setItem('refreshJwt', refreshJwt);
                localStorage.setItem('accessJwt', accessJwt);
            }),
            mergeMap(() => of(emptyAction())),
        );

const refreshTokensEpic =
    (action$, state$) =>
        action$.pipe(
            ofType(REFRESH_TOKENS),
            exhaustMap(() => {
                const refreshToken = selectRefreshJwt(state$.value) || localStorage.getItem('refreshJwt');
                if (!refreshToken) return of(emptyAction());

                const {csrf} = getJwtPayload(refreshToken);

                const request = fetch(
                    `${SERVER_ORIGIN}/admin/auth/refreshTokens`,
                    {
                        method: 'POST',
                        body: {
                            csrf,
                        },
                    },
                ).then(response => response.json());

                from(request)
                    .pipe(
                        mergeMap(body => of(authenticateAction(body))),
                    );
            }),
        );

const authFromMemoryEpic =
    action$ =>
        action$.pipe(
            ofType(AUTHENTICATE_FROM_MEMORY),
            exhaustMap(() => {
                const refreshJwt = localStorage.getItem('refreshJwt');
                const accessJwt = localStorage.getItem('accessJwt');

                return of(authenticateAction({accessJwt, refreshJwt}));
            }),
        );

const withAuthenticationEpic =
    (action$, state$) =>
        action$.pipe(
            ofType(WITH_AUTHENTICATION),
            mergeMap(({action}) => {
                const accessToken = selectAccessJwt(state$.value);
                const refreshToken = selectRefreshJwt(state$.value);

                const accessTokenPayload = getJwtPayload(accessToken);
                if (accessTokenPayload.exp < Date.now()) return of({...action, accessToken});

                const refreshTokenPayload = getJwtPayload(refreshToken);
                if (refreshTokenPayload.exp > Date.now()) return;

                return of(refreshTokensAction());
            }),
        );

export default combineEpics(
    authenticateEpic,
    authFromMemoryEpic,
    refreshTokensEpic,
    withAuthenticationEpic,
);
