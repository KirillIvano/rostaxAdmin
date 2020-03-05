import {
    GET_CATEGORIES_START,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_ERROR,
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

