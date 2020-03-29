import {
    GET_CATEGORIES_START,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_ERROR,
    GET_CATEGORIES_RELOAD,

    DELETE_CATEGORY_START,
    DELETE_CATEGORY_ERROR,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_RELOAD,

    CREATE_CATEGORY_START,
    CREATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_ERROR,
    CREATE_CATEGORY_RELOAD,

    UPDATE_CATEGORY_START,
    UPDATE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_ERROR,
    UPDATE_CATEGORY_RELOAD,

    SET_CATEGORY_PRODUCTIDS,
    ADD_PRODUCT_ID,
    REMOVE_PRODUCT_ID,
} from './names';

export const getCategories = () => ({
    type: GET_CATEGORIES_START,
});

export const getCategoriesSuccess = categories => ({
    type: GET_CATEGORIES_SUCCESS,
    payload: {
        categories,
    },
});

export const getCategoriesError = error => ({
    type: GET_CATEGORIES_ERROR,
    payload: {
        error,
    },
});

export const getCategoriesReload = () => ({
    type: GET_CATEGORIES_RELOAD,
});

export const deleteCategory = id => ({
    type: DELETE_CATEGORY_START,
    payload: {
        id,
    },
});

export const deleteCategorySuccess = id => ({
    type: DELETE_CATEGORY_SUCCESS,
    payload: {
        id,
    },
});

export const deleteCategoryError = error => ({
    type: DELETE_CATEGORY_ERROR,
    payload: {
        error,
    },
});

export const deleteCategoryReload = () => ({
    type: DELETE_CATEGORY_RELOAD,
});

export const createCategory = formData => ({
    type: CREATE_CATEGORY_START,
    payload: {
        formData,
    },
});

export const createCategorySuccess = category => ({
    type: CREATE_CATEGORY_SUCCESS,
    payload: {
        category,
    },
});

export const createCategoryError = error => ({
    type: CREATE_CATEGORY_ERROR,
    payload: {
        error,
    },
});

export const createCategoryReload = () => ({
    type: CREATE_CATEGORY_RELOAD,
});

export const updateCategory = (id, formData) => ({
    type: UPDATE_CATEGORY_START,
    payload: {
        formData,
        id,
    },
});

export const updateCategorySuccess = category => ({
    type: UPDATE_CATEGORY_SUCCESS,
    payload: {
        category,
    },
});

export const updateCategoryError = error => ({
    type: UPDATE_CATEGORY_ERROR,
    payload: {
        error,
    },
});

export const updateCategoryReload = () => ({
    type: UPDATE_CATEGORY_RELOAD,
});

export const setCategoryProductIds = category => ({
    type: SET_CATEGORY_PRODUCTIDS,
    payload: {
        category,
    },
});

export const addProductIdAction = (categoryId, productId) => ({
    type: ADD_PRODUCT_ID,
    payload: {
        categoryId,
        productId,
    },
});

export const removeProductIdAction = (categoryId, productId) => ({
    type: REMOVE_PRODUCT_ID,
    payload: {
        categoryId,
        productId,
    },
});
