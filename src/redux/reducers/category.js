import {
    GET_CATEGORIES_ERROR,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_START,
    DELETE_CATEGORY_ERROR,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_START,
} from '@/redux/names/category';

const INITIAL_STATE = {
    categories: [],
    categoriesLoading: false,
    categoriesError: null,
    categoryDeletingInProgress: false,
    categoryDeletingError: null,
    categoryDeletingSuccess: false,
};

export const categoryReducer = (
    state=INITIAL_STATE,
    action,
) => {
    const {type, payload} = action;

    switch (type) {
    case GET_CATEGORIES_START: {
        return {...state, categoriesLoading: true, categoriesError: null};
    }
    case GET_CATEGORIES_SUCCESS: {
        const {categories} = payload;

        return {...state, categoriesLoading: false, categories};
    }
    case GET_CATEGORIES_ERROR: {
        const {error} = payload;
        return {
            ...state,
            categoriesLoading: false,
            categories: null,
            categoriesError: error,
        };
    }

    case DELETE_CATEGORY_START: {
        return {
            ...state,
            categoryDeletingError: null,
            categoryDeletingSuccess: false,
            categoryDeletingInProgress: true,
        };
    }
    case DELETE_CATEGORY_SUCCESS: {
        const {id} = payload;
        const {categories} = state;

        return {
            ...state,
            categoryDeletingInProgress: false,
            categories: categories.filter(({id: itemId}) => itemId !== id),
            categoryDeletingSuccess: true,
        };
    }
    case DELETE_CATEGORY_ERROR: {
        const {error} = payload;
        return {
            ...state,
            categoryDeletingInProgress: false,
            categoryDeletingError: error,
        };
    }

    default: {
        return state;
    }
    }
};
