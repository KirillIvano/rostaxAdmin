import {
    GET_CATEGORIES_START,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_ERROR,
    DELETE_CATEGORY_START,
    DELETE_CATEGORY_ERROR,
    DELETE_CATEGORY_SUCCESS,
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
