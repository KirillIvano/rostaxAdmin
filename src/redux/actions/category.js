import {
    GET_CATEGORIES_START,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_ERROR,

    DELETE_CATEGORY_START,
    DELETE_CATEGORY_ERROR,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_RELOAD,

    CREATE_CATEGORY_START,
    CREATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_ERROR,
    CREATE_CATEGORY_RELOAD,
} from '@/redux/names/category';

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
export const deleteCategoryError = (id, error) => ({
    type: DELETE_CATEGORY_ERROR,
    payload: {
        id,
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
