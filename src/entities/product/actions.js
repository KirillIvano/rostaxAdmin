import {
    GET_PRODUCTS_START,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,

    DELETE_PRODUCT_START,
    DELETE_PRODUCT_ERROR,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_RELOAD,

    CREATE_PRODUCT_START,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_ERROR,
    CREATE_PRODUCT_RELOAD,

    UPDATE_PRODUCT_START,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_ERROR,
    UPDATE_PRODUCT_RELOAD,
} from './names';

export const getProducts = id => ({
    type: GET_PRODUCTS_START,
    payload: {
        id,
    },
});

export const getProductsSuccess = products => ({
    type: GET_PRODUCTS_SUCCESS,
    payload: {
        products,
    },
});

export const getProductsError = error => ({
    type: GET_PRODUCTS_ERROR,
    payload: {
        error,
    },
});

export const deleteProduct = id => ({
    type: DELETE_PRODUCT_START,
    payload: {
        id,
    },
});

export const deleteProductSuccess = id => ({
    type: DELETE_PRODUCT_SUCCESS,
    payload: {
        id,
    },
});

export const deleteProductError = error => ({
    type: DELETE_PRODUCT_ERROR,
    payload: {
        error,
    },
});

export const deleteProductReload = () => ({
    type: DELETE_PRODUCT_RELOAD,
});

export const createProduct = (categoryId, formData) => ({
    type: CREATE_PRODUCT_START,
    payload: {
        categoryId,
        formData,
    },
});

export const createProductSuccess = product => ({
    type: CREATE_PRODUCT_SUCCESS,
    payload: {
        product,
    },
});

export const createProductError = error => ({
    type: CREATE_PRODUCT_ERROR,
    payload: {
        error,
    },
});

export const createProductReload = () => ({
    type: CREATE_PRODUCT_RELOAD,
});

export const updateProduct = (id, formData) => ({
    type: UPDATE_PRODUCT_START,
    payload: {
        formData,
        id,
    },
});

export const updateProductSuccess = category => ({
    type: UPDATE_PRODUCT_SUCCESS,
    payload: {
        category,
    },
});

export const updateProductError = error => ({
    type: UPDATE_PRODUCT_ERROR,
    payload: {
        error,
    },
});

export const updateProductReload = () => ({
    type: UPDATE_PRODUCT_RELOAD,
});
