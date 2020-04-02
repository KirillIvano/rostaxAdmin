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
    UPDATE_PRODUCT_DESCRIPTION,
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

    updateProductDescriptionSuccess,
    updateProductDescriptionError,
} from '@/entities/product/actions';
import {
    setCategoryProductIds,
    addProductIdAction,
    removeProductIdAction,
} from '@/entities/category/actions';
import {
    showNormalMessage,
    showErrorMessage,
} from '@/entities/message/actions';
import {normalizeCategory} from '@/entities/category/normalization';

import {selectAccessJwt} from '@/redux/selectors/auth';
import {
    getProducts,
    createProduct,
    deleteProduct,
    updateProduct,
    updateProductDescription,
} from '@/services/products';

// GETTING
const getProductsObservable = (accessToken, categoryId) =>
    from(
        getProducts(accessToken, categoryId),
    ).pipe(
        mergeMap(
            ({ok, error, category: rawCategory}) => {
                if (!ok) {
                    return of(
                        getProductsError(error),
                    );
                }

                const normalizedData = normalizeCategory(rawCategory);
                const {entities} = normalizedData;
                const {product, category} = entities;

                return of(
                    getProductsSuccess(product),
                    setCategoryProductIds(category),
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

const deleteProductObservable = (accessToken, categoryId, productId) =>
    from(
        deleteProduct(accessToken, categoryId, productId),
    )
        .pipe(
            mergeMap(
                ({ok, error}) => {
                    if (!ok) {
                        return of(
                            deleteProductError(error),
                            showErrorMessage('Удаление продукта', error),
                        );
                    }

                    return of(
                        deleteProductSuccess(productId),
                        removeProductIdAction(categoryId, productId),
                        showNormalMessage('Удаление продукта', 'Удаление прошло успешно'),
                    );
                },
            ),
        );

export const deleteProductEpic =
    action$ =>
        action$.pipe(
            ofType(DELETE_PRODUCT_START),
            switchMap(
                ({accessToken, payload: {categoryId, productId}}) =>
                    deleteProductObservable(accessToken, categoryId, productId),
            ),
        );

// CREATING

const createProductObservable = (accessToken, categoryId, bodyData) => {
    const body = new FormData();

    Object.entries(bodyData).forEach(
        ([name, value]) => value && body.append(name, value),
    );
    const request = createProduct(accessToken, categoryId, body);

    return from(request)
        .pipe(
            mergeMap(
                ({ok, error, product}) => {
                    if (!ok) {
                        return of(
                            createProductError(error),
                            showErrorMessage('Создание продукта', error),
                        );
                    }

                    return of(
                        createProductSuccess(product),
                        addProductIdAction(categoryId, product.id),
                        showNormalMessage('Создание продукта', 'Категория успешно создана'),
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
                    const {
                        categoryId,
                        formData,
                    } = payload;

                    return createProductObservable(
                        selectAccessJwt(state$.value),
                        categoryId,
                        formData,
                    );
                },
            ),
        );

// UPDATING

const updateProductObservable = (
    accessToken,
    categoryId,
    productId,
    bodyData,
) => {
    const body = new FormData();

    Object.entries(bodyData).forEach(
        ([name, value]) => value && body.append(name, value),
    );

    const request = updateProduct(accessToken, categoryId, productId, body);

    return from(request)
        .pipe(
            mergeMap(
                ({ok, error, product}) => {
                    if (!ok) {
                        return of(
                            updateProductError(error),
                            showErrorMessage('Редактирование продукта', error),
                        );
                    }

                    return of(
                        updateProductSuccess(product),
                        showNormalMessage('Редактирование продукта', 'Продукт успешно отредактирован'),
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
                    const {categoryId, productId, formData} = payload;

                    return updateProductObservable(accessToken, categoryId, productId, formData);
                },
            ),
        );

const updateProductDescriptionObservable = (
    accessToken,
    categoryId,
    productId,
    description,
) => {
    const request = updateProductDescription(
        accessToken,
        categoryId,
        productId,
        description,
    );

    return from(request)
        .pipe(
            mergeMap(
                ({ok, error, product}) => {
                    if (!ok) {
                        return of(
                            updateProductDescriptionError(error),
                            showErrorMessage('Редактирование описания', error),
                        );
                    }

                    return of(
                        updateProductDescriptionSuccess(product),
                        showNormalMessage('Редактирование описания', 'Категория успешно отредактирована'),
                    );
                },
            ),
        );
};

const updateProductDescriptionEpic =
    action$ =>
        action$.pipe(
            ofType(UPDATE_PRODUCT_DESCRIPTION),
            switchMap(
                ({payload, accessToken}) => {
                    const {
                        categoryId,
                        productId,
                        description,
                    } = payload;

                    return updateProductDescriptionObservable(
                        accessToken,
                        categoryId,
                        productId,
                        description,
                    );
                },
            ),
        );

export default combineEpics(
    getProductsEpic,
    deleteProductEpic,
    createProductEpic,
    updateProductEpic,
    updateProductDescriptionEpic,
);
