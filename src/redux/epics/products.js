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
    GET_PRODUCTS_START,
    DELETE_PRODUCT_START,
    CREATE_PRODUCT_START,
    UPDATE_PRODUCT_START,
} from '@/entities/product/names';
import {
    getProductsError,
    getProductsSuccess,

    deleteProductError,
    deleteProductSuccess,

    createProductError,
    createProductSuccess,

    updateProductError,
    updateProductSuccess,
} from '@/entities/product/actions';
import {setCategoryProductIds} from '@/entities/category/actions';
import {
    showNormalMessage,
    showErrorMessage,
} from '@/entities/message/actions';
import {normalizeProducts} from '@/entities/product/normalization';

import {selectAccessJwt} from '@/redux/selectors/auth';
import {
    deleteCategory,
    updateCategory,
    createCategory,
} from '@/services/categories';
import {
    getProducts,
} from '@/services/products';

// GETTING
const getProductsObservable = (accessToken, categoryId) =>
    from(
        getProducts(accessToken, categoryId),
    ).pipe(
        mergeMap(
            ({ok, error, products}) => {
                if (!ok) {
                    return of(
                        getProductsError(error),
                    );
                }

                const {productIds, products: productsObj} = normalizeProducts(products);

                return of(
                    getProductsSuccess(productsObj),
                    setCategoryProductIds(categoryId, productIds),
                );
            },
        ),
    );

export const getProductsEpic =
    action$ =>
        action$.pipe(
            ofType(GET_PRODUCTS_START),
            switchMap(({accessToken, payload: {id}}) => getProductsObservable(accessToken, id)),
        );

// DELETING

const deleteProductObservable = (categoryId, accessToken) =>
    from(
        deleteCategory(accessToken, categoryId),
    )
        .pipe(
            mergeMap(
                ({ok, error}) => {
                    if (!ok) {
                        return of(
                            deleteProductError(error),
                            showErrorMessage('Удаление категории', error),
                        );
                    }

                    return of(
                        deleteProductSuccess(categoryId),
                        showNormalMessage('Удаление категории', 'Удаление прошло успешно'),
                    );
                },
            ),
        );

export const deleteProductEpic =
    action$ =>
        action$.pipe(
            ofType(DELETE_PRODUCT_START),
            switchMap(
                ({accessToken, payload: {id}}) => deleteProductObservable(id, accessToken),
            ),
        );

// CREATING

const createProductObservable = (bodyData, accessToken) => {
    const body = new FormData();

    Object.entries(bodyData).forEach(
        ([name, value]) => value && body.append(name, value),
    );
    const request = createCategory(accessToken, body);

    return from(request)
        .pipe(
            mergeMap(
                ({ok, error, category}) => {
                    if (!ok) {
                        return of(
                            createProductError(error),
                            showErrorMessage('Создание категории', error),
                        );
                    }

                    return of(
                        createProductSuccess(category),
                        showNormalMessage('Создание категории', 'Категория успешно создана'),
                    );
                },
            ),
        );
};


const createProductEpic =
    (action$, state$) =>
        action$.pipe(
            ofType(CREATE_PRODUCT_START),
            switchMap(
                ({payload}) => {
                    const {formData} = payload;

                    return createProductObservable(formData, selectAccessJwt(state$.value));
                },
            ),
        );

const updateProductObservable = (
    categoryId,
    bodyData,
    accessToken,
) => {
    const body = new FormData();

    Object.entries(bodyData).forEach(
        ([name, value]) => value && body.append(name, value),
    );

    const request = updateCategory(accessToken, categoryId, body);

    return from(request)
        .pipe(
            mergeMap(
                ({ok, error, category}) => {
                    if (!ok) {
                        return of(
                            updateProductError(error),
                            showErrorMessage('Редактирование категории', error),
                        );
                    }

                    return of(
                        updateProductSuccess(category),
                        showNormalMessage('Редактирование категории', 'Категория успешно отредактирована'),
                    );
                },
            ),
        );
};

const updateProductEpic =
    action$ =>
        action$.pipe(
            ofType(UPDATE_PRODUCT_START),
            switchMap(
                ({payload, accessToken}) => {
                    const {id, formData} = payload;

                    return updateProductObservable(id, formData, accessToken);
                },
            ),
        );

export default combineEpics(
    getProductsEpic,
    deleteProductEpic,
    createProductEpic,
    updateProductEpic,
);
