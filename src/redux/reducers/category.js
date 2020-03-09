import {
    GET_CATEGORIES_START,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_ERROR,

    DELETE_CATEGORY_START,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_ERROR,
    DELETE_CATEGORY_RELOAD,

    CREATE_CATEGORY_START,
    CREATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_ERROR,
    CREATE_CATEGORY_RELOAD,
} from '@/redux/names/category';

const INITIAL_STATE = {
    categories: [],
    categoriesLoading: false,
    categoriesError: null,

    categoryDeletingInProgress: false,
    categoryDeletingError: null,
    categoryDeletingSuccess: false,

    categoryCreatingInProgress: false,
    categoryCreatingError: null,
    categoryCreatingSuccess: false,
};

export const categoryReducer = (
    state=INITIAL_STATE,
    action,
) => {
    const {type, payload} = action;

    switch (type) {
    case GET_CATEGORIES_START: {
        return {
            ...state,
            categoriesLoading: true,
            categoriesError: null,
        };
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
            categories: categories.filter(({id: itemId}) => itemId !== id),
            categoryDeletingInProgress: false,
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
    case DELETE_CATEGORY_RELOAD: {
        return {
            ...state,
            categoryDeletingError: null,
            categoryDeletingSuccess: false,
            categoryDeletingInProgress: true,
        };
    }

    case CREATE_CATEGORY_START: {
        return {
            ...state,
            categoryCreatingInProgress: false,
            categoryCreatingError: null,
            categoryCreatingSuccess: false,
        };
    }
    case CREATE_CATEGORY_SUCCESS: {
        const {category} = payload;
        const {categories} = state;

        return {
            ...state,
            categories: [...categories, category],
            categoryCreatingInProgress: false,
            categoryCreatingSuccess: true,
        };
    }
    case CREATE_CATEGORY_ERROR: {
        const {error} = payload;

        return {
            ...state,
            categoryCreatingInProgress: false,
            categoryCreatingError: error,
        };
    }
    case CREATE_CATEGORY_RELOAD: {
        return {
            ...state,
            categoryCreatingInProgress: false,
            categoryCreatingError: null,
            categoryCreatingSuccess: false,
        };
    }
    default: {
        return state;
    }
    }
};
