import {ofType} from 'redux-observable';
import {of} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {
    mergeMap,
    catchError,
} from 'rxjs/operators';

import {
    GET_CATEGORIES_START,
} from '@/redux/names/category';
import {
    getCategoriesError,
    getCategoriesSuccess,
} from '@/redux/actions/category';

const getCategories$ = ajax
    .getJSON(`${SERVER_ORIGIN}/admin/categories`)
    .pipe(
        mergeMap(
            ({data}) => of(
                getCategoriesSuccess(data),
            ),
        ),
        catchError(
            ({response}) => {
                const {error} = response;

                return of(getCategoriesError(error));
            },
        ),
    );


export const getCategoriesEpic =
    action$ =>
        action$.pipe(
            ofType(GET_CATEGORIES_START),
            mergeMap(
                () => getCategories$,
            ),
        );
