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

export type getCategoriesActionType = {
    type: typeof GET_CATEGORIES_START,
}
export const getCategories = () => ({
    type: GET_CATEGORIES_START,
});

export type getCategoriesSuccessActionType = {
    type: typeof GET_CATEGORIES_SUCCESS,
    payload: {
        categories: Category[],
    },
}
export const getCategoriesSuccess = (categories: Category[]) => ({
    type: GET_CATEGORIES_SUCCESS,
    payload: {
        categories,
    },
});

export type getCategoriesErrorActionType = {
    type: typeof GET_CATEGORIES_ERROR,
    payload: {
        error: string,
    },
}
export const getCategoriesError = (error: string) => ({
    type: GET_CATEGORIES_ERROR,
    payload: {
        error,
    },
});

export type deleteCategoryActionType = {
    type: typeof GET_CATEGORIES_ERROR,
    payload: {
        id: string,
    },
}
export const deleteCategory = (id: string) => ({
    type: DELETE_CATEGORY_START,
    payload: {
        id,
    },
});

export type deleteCategorySuccessActionType = {
    type: typeof DELETE_CATEGORY_SUCCESS,
    payload: {
        id: string,
    },
}
export const deleteCategorySuccess = id => ({
    type: DELETE_CATEGORY_SUCCESS,
    payload: {
        id,
    },
});

export type deleteCategoryErrorActionType = {
    type: typeof DELETE_CATEGORY_ERROR,
    payload: {
        error: string,
    },
}
export const deleteCategoryError = (error: string) => ({
    type: DELETE_CATEGORY_ERROR,
    payload: {
        error,
    },
});

export type deleteCategoryReloadActionType = {
    type: typeof DELETE_CATEGORY_RELOAD,
}
export const deleteCategoryReload = () => ({
    type: DELETE_CATEGORY_RELOAD,
});

export type createCategoryActionType = {
    type: typeof CREATE_CATEGORY_START,
    payload: {
        formData: CategoryFormData,
    },
}
export const createCategory = (formData: CategoryFormData) => ({
    type: CREATE_CATEGORY_START,
    payload: {
        formData,
    },
});

export type createCategorySuccessActionType = {
    type: typeof CREATE_CATEGORY_SUCCESS,
    payload: {
        category: Category,
    },
}
export const createCategorySuccess = (category: Category) => ({
    type: CREATE_CATEGORY_SUCCESS,
    payload: {
        category,
    },
});

export type createCategoryErrorActionType = {
    type: typeof CREATE_CATEGORY_ERROR,
    payload: {
        error: string,
    },
}
export const createCategoryError = (error: string) => ({
    type: CREATE_CATEGORY_ERROR,
    payload: {
        error,
    },
});

export type createCategoryReloadActionType = {
    type: typeof CREATE_CATEGORY_RELOAD,
}
export const createCategoryReload = () => ({
    type: CREATE_CATEGORY_RELOAD,
});


export type updateCategoryActionType = {
    type: typeof UPDATE_CATEGORY_START,
    payload: {
        formData: CategoryFormData,
        id: string,
    },
}
export const updateCategory = (id: string, formData: CategoryFormData) => ({
    type: UPDATE_CATEGORY_START,
    payload: {
        formData,
        id,
    },
});

export type updateCategorySuccessActionType = {
    type: typeof UPDATE_CATEGORY_SUCCESS,
    payload: {
        category: Category,
    },
}
export const updateCategorySuccess = (category: Category) => ({
    type: UPDATE_CATEGORY_SUCCESS,
    payload: {
        category,
    },
});

export type updateCategoryErrorActionType = {
    type: typeof UPDATE_CATEGORY_ERROR,
    payload: {
        error: string,
    },
}
export const updateCategoryError = (error: string) => ({
    type: UPDATE_CATEGORY_ERROR,
    payload: {
        error,
    },
});

export type updateCategoryReloadActionType = {
    type: typeof UPDATE_CATEGORY_RELOAD,
}
export const updateCategoryReload = () => ({
    type: UPDATE_CATEGORY_RELOAD,
});
