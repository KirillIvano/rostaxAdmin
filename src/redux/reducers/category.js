import {
    GET_CATEGORIES_ERROR,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_START,
} from '@/redux/names/category';

const INITIAL_STATE = {
    categories: [],
    categoriesLoading: false,
    categoriesError: null,
};

export const categoryReducer = (
    state=INITIAL_STATE,
    action,
) => {
    const {type, payload} = action;

    switch (type) {
    case GET_CATEGORIES_START: {
        return {...state, categoriesLoading: true};
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
            error,
        };
    }
    default: {
        return state;
    }
    }
};
