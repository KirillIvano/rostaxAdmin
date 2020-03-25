// @flow

import {
    ofType,
    combineEpics,
} from 'redux-observable';
import {of, from} from 'rxjs';
import type {Observable} from 'rxjs';
import {
    switchMap,
    mergeMap,
} from 'rxjs/operators';

import {
    GET_CATEGORIES_START,
    DELETE_CATEGORY_START,
    CREATE_CATEGORY_START,
    UPDATE_CATEGORY_START,
} from '@/entities/category/names';
import {
    getCategoriesError,
    getCategoriesSuccess,

    deleteCategoryError,
    deleteCategorySuccess,

    createCategoryError,
    createCategorySuccess,

    updateCategoryError,
    updateCategorySuccess,
} from '@/entities/category/actions';
import {
    showNormalMessage,
    showErrorMessage,
} from '@/entities/message/actions';
import {selectAccessJwt} from '@/redux/selectors/auth';
import {
    getCategories,
    deleteCategory,
    updateCategory,
    createCategory,
} from '@/services/categories';

import type {
    getCategoriesActionType,
    createCategoryActionType,
    updateCategoryActionType,
    deleteCategoryActionType,
} from '@/entities/category/actions';

// GETTING
const getCategoriesObservable = accessToken =>
    from(
        getCategories(accessToken),
    ).pipe(
        mergeMap(
            ({ok, error, categories}) => {
                if (!ok) {
                    return of(
                        getCategoriesError(error),
                    );
                }
                return of(
                    getCategoriesSuccess(categories),
                );
            },
        ),
    );

export const getCategoriesEpic =
    (action$: Observable) =>
        action$.pipe(
            ofType(GET_CATEGORIES_START),
            switchMap(({accessToken}) => getCategoriesObservable(accessToken)),
        );

// DELETING

const deleteCategoryObservable = (categoryId, accessToken) =>
    from(
        deleteCategory(accessToken, categoryId),
    )
        .pipe(
            mergeMap(
                ({ok, error}) => {
                    if (!ok) {
                        return of(
                            deleteCategoryError(error),
                            showErrorMessage('Удаление категории', error),
                        );
                    }

                    return of(
                        deleteCategorySuccess(categoryId),
                        showNormalMessage('Удаление категории', 'Удаление прошло успешно'),
                    );
                },
            ),
        );

export const deleteCategoryEpic =
    (action$: Observable) =>
        action$.pipe(
            ofType(DELETE_CATEGORY_START),
            switchMap(
                ({accessToken, payload: {id}}) => deleteCategoryObservable(id, accessToken),
            ),
        );

// CREATING

const createCategoryObservable = ({name, image}, accessToken) => {
    const body = new FormData();

    body.append('name', name);
    body.append('image', image);

    const request = createCategory(accessToken, body);

    return from(request)
        .pipe(
            mergeMap(
                ({ok, error, category}) => {
                    if (!ok) {
                        return of(
                            createCategoryError(error),
                            showErrorMessage('Создание категории', error),
                        );
                    }

                    return of(
                        createCategorySuccess(category),
                        showNormalMessage('Создание категории', 'Категория успешно создана'),
                    );
                },
            ),
        );
};


export const createCategoryEpic =
    (action$: Observable, state$: Observable) =>
        action$.pipe(
            ofType(CREATE_CATEGORY_START),
            switchMap(
                ({payload}) => {
                    const {formData} = payload;

                    return createCategoryObservable(formData, selectAccessJwt(state$.value));
                },
            ),
        );

const updateCategoryObservable = (categoryId, {name, image}, accessToken) => {
    const body = new FormData();

    body.append('name', name);
    body.append('image', image);

    const request = updateCategory(accessToken, categoryId, body);

    return from(request)
        .pipe(
            mergeMap(
                ({ok, error, category}) => {
                    if (!ok) {
                        return of(
                            updateCategoryError(error),
                            showErrorMessage('Редактирование категории', error),
                        );
                    }

                    return of(
                        updateCategorySuccess(category),
                        showNormalMessage('Редактирование категории', 'Категория успешно отредактирована'),
                    );
                },
            ),
        );
};

export const updateCategoryEpic =
    (action$: Observable) =>
        action$.pipe(
            ofType(UPDATE_CATEGORY_START),
            switchMap(
                ({payload, accessToken}) => {
                    const {id, formData} = payload;

                    return updateCategoryObservable(id, formData, accessToken);
                },
            ),
        );

export default combineEpics(
    getCategoriesEpic,
    deleteCategoryEpic,
    createCategoryEpic,
    updateCategoryEpic,
);
