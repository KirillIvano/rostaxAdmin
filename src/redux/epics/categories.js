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
    CREATE_CATEGORY_START,
    UPDATE_CATEGORY_START,
} from '@/redux/names/category';
import {
    getCategoriesError,
    getCategoriesSuccess,

    deleteCategoryError,
    deleteCategorySuccess,

    createCategoryError,
    createCategorySuccess,

    updateCategoryError,
    updateCategorySuccess,
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



// CREATING

const createCategory = formData => {
    const body = new FormData();

    Object.entries(formData).forEach(([name, value]) => {
        body.append(name, value);
    });

    return ajax
        .post(
            `${SERVER_ORIGIN}/admin/categories`,
            body,
        )
        .pipe(
            mergeMap(
                ({response}) => {
                    const {category} = response;

                    return of(
                        createCategorySuccess(category),
                    );
                },
            ),
            catchError(
                ({response}) => {
                    const {error} = response;

                    return of(createCategoryError(error));
                },
            ),
        );
};


export const createCategoryEpic =
    action$ =>
        action$.pipe(
            ofType(CREATE_CATEGORY_START),
            switchMap(
                ({payload}) => {
                    const {formData} = payload;

                    return createCategory(formData);
                },
            ),
        );

const updateCategory = (formData, categoryId) => {
    const body = new FormData();

    Object.entries(formData).forEach(([name, value]) => {
        body.append(name, value);
    });

    return ajax
        .put(
            `${SERVER_ORIGIN}/admin/categories/${categoryId}`,
            body,
        )
        .pipe(
            mergeMap(
                ({response}) => {
                    const {category} = response;

                    return of(
                        updateCategorySuccess(category),
                    );
                },
            ),
            catchError(
                ({response}) => {
                    const {error} = response;

                    return of(updateCategoryError(error));
                },
            ),
        );
};


export const updateCategoryEpic =
    action$ =>
        action$.pipe(
            ofType(UPDATE_CATEGORY_START),
            switchMap(
                ({payload}) => {
                    const {formData} = payload;

                    return updateCategory(formData);
                },
            ),
        );

export default combineEpics(
    getCategoriesEpic,
    deleteCategoryEpic,
    createCategoryEpic,
    updateCategoryEpic,
);
