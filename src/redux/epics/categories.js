import {
    ofType,
    combineEpics,
} from 'redux-observable';
import {of, from} from 'rxjs';
import {
    switchMap,
    mergeMap,
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
import {
    showNormalMessage,
    showErrorMessage,
} from '@/redux/actions/message';
import {selectAccessJwt} from '@/redux/selectors/auth';

// GETTING

const getCategories = accessToken =>
    from(
        fetch(
            `${SERVER_ORIGIN}/admin/categories/previews`,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            }).then(res => res.json()),
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
    (action$, state$) =>
        action$.pipe(
            ofType(GET_CATEGORIES_START),
            switchMap(() => getCategories(selectAccessJwt(state$.value))),
        );

// DELETING

const deleteCategory = (categoryId, accessToken) => {
    const request = fetch(
        `${SERVER_ORIGIN}/admin/categories/previews`,
        {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        }).then(res => res.json());

    return from(request)
        .pipe(
            mergeMap(
                ({ok, error}) => {
                    if (!ok) {
                        return of(
                            deleteCategoryError(categoryId, error),
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
};

export const deleteCategoryEpic =
    (action$, state$) =>
        action$.pipe(
            ofType(DELETE_CATEGORY_START),
            switchMap(
                ({payload}) => {
                    const {id} = payload;

                    return deleteCategory(id, selectAccessJwt(state$.value));
                },
            ),
        );



// CREATING

const createCategory = (formData, accessToken) => {
    const body = new FormData();

    Object.entries(formData).forEach(([name, value]) => {
        body.append(name, value);
    });

    const request = fetch(
        `${SERVER_ORIGIN}/admin/categories`,
        {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
            body,
        }).then(res => res.json());

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
    (action$, state$) =>
        action$.pipe(
            ofType(CREATE_CATEGORY_START),
            switchMap(
                ({payload}) => {
                    const {formData} = payload;

                    return createCategory(formData, selectAccessJwt(state$.value));
                },
            ),
        );

const updateCategory = (categoryId, formData, accessToken) => {
    const body = new FormData();

    Object.entries(formData).forEach(([name, value]) => {
        if (value !== undefined) body.append(name, value);
    });

    const request = fetch(
        `${SERVER_ORIGIN}/admin/categories/${categoryId}`,
        {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
            body,
        }).then(res => res.json());

    return request
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
                        updateCategorySuccess(category, categoryId),
                        showNormalMessage('Редактирование категории', 'Категория успешно отредактирована'),
                    );
                },
            ),
        );
};

export const updateCategoryEpic =
    (action$, state$) =>
        action$.pipe(
            ofType(UPDATE_CATEGORY_START),
            switchMap(
                ({payload}) => {
                    const {id, formData} = payload;

                    const accessToken = selectAccessJwt(state$.value);

                    return updateCategory(id, formData, accessToken);
                },
            ),
        );

export default combineEpics(
    getCategoriesEpic,
    deleteCategoryEpic,
    createCategoryEpic,
    updateCategoryEpic,
);
