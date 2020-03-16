import {
    ofType,
    combineEpics,
} from 'redux-observable';
import {of, from} from 'rxjs';
import {
    tap,
    exhaustMap,
    mergeMap,
    delay,
    concat,
    catchError,
} from 'rxjs/operators';
import {
    SAVE_TOKEN,
    AUTHENTICATE_FROM_MEMORY,
    WITH_AUTHENTICATION,
    REFRESH_TOKENS,
    APP_START_AUTH,
} from '@/redux/names/auth';
import {getJwtPayload, isTokenExpired} from '@/helpers/jwt';
import {
    selectRefreshJwt,
    selectAccessJwt,
} from '@/redux/selectors/auth';
import {
    authenticateAction,
    refreshTokensAction,
    authFromMemoryFinishAction,
    saveTokenAction,
    appStartAuthErrorAction,
    appStartAuthSuccessAction,
} from '@/redux/actions/auth';
import {
    showErrorMessage,
    showNormalMessage,
} from '@/redux/actions/message';
import {emptyAction} from '@/redux/actions/empty';

const refreshTokenObservable = csrf => {
    const body = {csrf, kek: 'kek'};

    const request = fetch(
        `${SERVER_ORIGIN}/admin/auth/refreshTokens`,
        {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        },
    ).then(response => response.json());

    return from(request);
};

const appStartAuthEpic =
    action$ =>
        action$.pipe(
            ofType(APP_START_AUTH),
            exhaustMap(() => {
                const refreshJwt = localStorage.getItem('refreshJwt');

                if (!refreshJwt || isTokenExpired(refreshJwt)) {
                    return of(
                        appStartAuthErrorAction(),
                    );
                }

                const {csrf} = getJwtPayload(refreshJwt);

                return refreshTokenObservable(csrf).pipe(
                    mergeMap(
                        ({ok, error, accessJwt, refreshJwt}) => {
                            if (!ok) {
                                return of(
                                    showErrorMessage('Вход', error),
                                    appStartAuthErrorAction(),
                                );
                            }

                            return of(
                                authenticateAction({accessJwt, refreshJwt}),
                                saveTokenAction(refreshJwt),
                                appStartAuthSuccessAction(),
                            );
                        },
                    ),
                );
            }),
        );

const saveTokenEpic =
    action$ =>
        action$.pipe(
            ofType(SAVE_TOKEN),
            tap(({payload}) => {
                const {refreshJwt} = payload;

                localStorage.setItem('refreshJwt', refreshJwt);
            }),
            mergeMap(() => of(emptyAction())),
        );


// const refreshTokensEpic =
//     (action$, state$) =>
//         action$.pipe(
//             ofType(REFRESH_TOKENS),
//             exhaustMap(() => {
//                 const refreshToken = selectRefreshJwt(state$.value) || localStorage.getItem('refreshJwt');
//                 if (!refreshToken) return of(emptyAction());

//                 const {csrf} = getJwtPayload(refreshToken);

//                 return refreshTokenObservable(csrf);
//             }),
//         );

// const authFromMemoryEpic =
//     action$ =>
//         action$.pipe(
//             ofType(AUTHENTICATE_FROM_MEMORY),
//             exhaustMap(() => {
//                 const refreshJwt = localStorage.getItem('refreshJwt');
//                 const accessJwt = localStorage.getItem('accessJwt');

//                 return of(
//                     authenticateAction({accessJwt, refreshJwt}),
//                     authFromMemoryFinishAction(),
//                 );
//             }),
//         );

// const withAuthenticationEpic =
//     (action$, state$) =>
//         action$.pipe(
//             ofType(WITH_AUTHENTICATION),
//             mergeMap(({action}) => {
//                 const accessToken = selectAccessJwt(state$.value);
//                 const refreshToken = selectRefreshJwt(state$.value);

//                 const accessTokenPayload = getJwtPayload(accessToken);

//                 if (accessTokenPayload.exp > Date.now() / 1000) return of({...action, accessToken});

//                 const refreshTokenPayload = getJwtPayload(refreshToken);

//                 if (refreshTokenPayload.exp > Date.now() / 1000) {
//                     return refreshTokenObservable();
//                 }

//                 return of(refreshTokensAction());
//             }),
//         );

export default combineEpics(
    appStartAuthEpic,
    saveTokenEpic,
    // authFromMemoryEpic,
    // refreshTokensEpic,
    // withAuthenticationEpic,
);
