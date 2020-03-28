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
import {normalizeCategoriesPreviews} from '@/entities/category/normalization';

import {selectAccessJwt} from '@/redux/selectors/auth';
import {
    getCategories,
    deleteCategory,
    updateCategory,
    createCategory,
} from '@/services/categories';

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
                    getCategoriesSuccess(
                        normalizeCategoriesPreviews(categories),
                    ),
                );
            },
        ),
    );

export const getCategoriesEpic =
    action$ =>
        action$.pipe(
            ofType(GET_CATEGORIES_START),
            switchMap(({accessToken}) => getCategoriesObservable(accessToken)),
        );

// DELETING

const deleteCategoryObservable = (accessToken, categoryId) =>
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
    action$ =>
        action$.pipe(
            ofType(DELETE_CATEGORY_START),
            switchMap(
                ({accessToken, payload: {id}}) => deleteCategoryObservable(accessToken, id),
            ),
        );

// CREATING

const createCategoryObservable = (accessToken, {name, image}) => {
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
    (action$, state$) =>
        action$.pipe(
            ofType(CREATE_CATEGORY_START),
            switchMap(
                ({payload}) => {
                    const {formData} = payload;

                    return createCategoryObservable(selectAccessJwt(state$.value), formData);
                },
            ),
        );

const updateCategoryObservable = (accessToken, categoryId, {name, image}) => {
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
    action$ =>
        action$.pipe(
            ofType(UPDATE_CATEGORY_START),
            switchMap(
                ({payload, accessToken}) => {
                    const {id, formData} = payload;

                    return updateCategoryObservable(accessToken, id, formData);
                },
            ),
        );

export default combineEpics(
    getCategoriesEpic,
    deleteCategoryEpic,
    createCategoryEpic,
    updateCategoryEpic,
);
