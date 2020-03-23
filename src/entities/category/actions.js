// @flow

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

    UPDATE_CATEGORY_START,
    UPDATE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_ERROR,
    UPDATE_CATEGORY_RELOAD,
} from './names';

import type {
    Category,
    CategoryFormData,
} from './types';

export const getCategories = () => ({
    type: GET_CATEGORIES_START,
});

export const getCategoriesSuccess = (categories: Category) => ({
    type: GET_CATEGORIES_SUCCESS,
    payload: {
        categories,
    },
});
export const getCategoriesError = (error: string) => ({
    type: GET_CATEGORIES_ERROR,
    payload: {
        error,
    },
});

export const deleteCategory = (id: string) => ({
    type: DELETE_CATEGORY_START,
    payload: {
        id,
    },
});
export const deleteCategorySuccess = (id: string) => ({
    type: DELETE_CATEGORY_SUCCESS,
    payload: {
        id,
    },
});
export const deleteCategoryError = (id: string, error: string) => ({
    type: DELETE_CATEGORY_ERROR,
    payload: {
        id,
        error,
    },
});
export const deleteCategoryReload = () => ({
    type: DELETE_CATEGORY_RELOAD,
});

export const createCategory = (formData: CategoryFormData) => ({
    type: CREATE_CATEGORY_START,
    payload: {
        formData,
    },
});
export const createCategorySuccess = (category: Category) => ({
    type: CREATE_CATEGORY_SUCCESS,
    payload: {
        category,
    },
});
export const createCategoryError = (error: string) => ({
    type: CREATE_CATEGORY_ERROR,
    payload: {
        error,
    },
});
export const createCategoryReload = () => ({
    type: CREATE_CATEGORY_RELOAD,
});

export const updateCategory = (id: string, formData: CategoryFormData) => ({
    type: UPDATE_CATEGORY_START,
    payload: {
        formData,
        id,
    },
});
export const updateCategorySuccess = (category: Category) => ({
    type: UPDATE_CATEGORY_SUCCESS,
    payload: {
        category,
    },
});
export const updateCategoryError = (error: string) => ({
    type: UPDATE_CATEGORY_ERROR,
    payload: {
        error,
    },
});
export const updateCategoryReload = () => ({
    type: UPDATE_CATEGORY_RELOAD,
});
