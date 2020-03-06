import {
    ofType,
    combineEpics,
} from 'redux-observable';
import {of} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {
    switchMap,
    mergeMap,
    catchError,
} from 'rxjs/operators';

import {
    GET_CATEGORIES_START,
    DELETE_CATEGORY_START,
} from '@/redux/names/category';
import {
    getCategoriesError,
    getCategoriesSuccess,
    deleteCategoryError,
    deleteCategorySuccess,
} from '@/redux/actions/category';

// GETTING

const getCategories$ = ajax
    .getJSON(`${SERVER_ORIGIN}/admin/categories/previews`)
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
            switchMap(
                () => getCategories$,
            ),
        );

// DELETING

const deleteCategory = categoryId =>
    ajax
        .delete(`${SERVER_ORIGIN}/admin/categories/${categoryId}`)
        .pipe(
            mergeMap(
                () => of(
                    deleteCategorySuccess(categoryId),
                ),
            ),
            catchError(
                ({response}) => {
                    const {error} = response;

                    return of(deleteCategoryError(categoryId, error));
                },
            ),
        );

export const deleteCategoryEpic =
    action$ =>
        action$.pipe(
            ofType(DELETE_CATEGORY_START),
            switchMap(
                ({payload}) => {
                    const {id} = payload;

                    return deleteCategory(id);
                },
            ),
        );

export default combineEpics(getCategoriesEpic ,deleteCategoryEpic);
