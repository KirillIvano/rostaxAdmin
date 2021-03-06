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

    UPDATE_CATEGORY_START,
    UPDATE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_ERROR,
    UPDATE_CATEGORY_RELOAD,

    SET_CATEGORY_PRODUCTIDS,
    ADD_PRODUCT_ID,
    REMOVE_PRODUCT_ID,
} from '@/entities/category/names';

const INITIAL_STATE = {
    categories: {},
    categoriesLoading: false,
    categoriesError: null,

    categoryDeletingInProgress: false,
    categoryDeletingError: null,
    categoryDeletingSuccess: false,

    categoryCreatingInProgress: false,
    categoryCreatingError: null,
    categoryCreatingSuccess: false,

    categoryUpdatingInProgress: false,
    categoryUpdatingError: null,
    categoryUpdatingSuccess: false,
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
            categories: {},
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

        const newCategories = categories;
        delete newCategories[id];

        return {
            ...state,
            categories: newCategories,
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
            categoryDeletingInProgress: false,
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
        const {id} = category;

        return {
            ...state,
            categories: {...categories, [id]: category},
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

    case UPDATE_CATEGORY_START: {
        return {
            ...state,
            categoryUpdatingInProgress: true,
            categoryUpdatingError: null,
            categoryUpdatingSuccess: false,
        };
    }
    case UPDATE_CATEGORY_SUCCESS: {
        const {category} = payload;
        const {categories} = state;
        const {id} = category;

        const newCategories = {...categories};
        newCategories[id] = category;

        return {
            ...state,
            categories: newCategories,
            categoryUpdatingInProgress: false,
            categoryUpdatingSuccess: true,
        };
    }
    case UPDATE_CATEGORY_ERROR: {
        const {error} = payload;

        return {
            ...state,
            categoryUpdatingInProgress: false,
            categoryUpdatingError: error,
        };
    }
    case UPDATE_CATEGORY_RELOAD: {
        return {
            ...state,
            categoryUpdatingInProgress: false,
            categoryUpdatingError: null,
            categoryUpdatingSuccess: false,
        };
    }

    case SET_CATEGORY_PRODUCTIDS: {
        const {category} = payload;

        const categoriesCopy = {
            ...state.categories,
            ...category,
        };

        return {
            ...state,
            categories: categoriesCopy,
        };
    }

    case ADD_PRODUCT_ID: {
        const {categoryId, productId} = payload;
        const {categories} = state;

        const updatedCategory = {...categories[categoryId]};
        const updatedProducts = [...updatedCategory.products, productId];

        updatedCategory.products = updatedProducts;

        return {
            ...state,
            categories: {
                ...state.categories,
                [categoryId]: updatedCategory,
            },
        };
    }

    case REMOVE_PRODUCT_ID: {
        const {categoryId, productId} = payload;
        const {categories} = state;

        const updatedCategory = {...categories[categoryId]};
        const updatedProducts = updatedCategory.products.filter(id => id !== productId);

        updatedCategory.products = updatedProducts;

        return {
            ...state,
            categories: {
                ...state.categories,
                [categoryId]: updatedCategory,
            },
        };
    }

    default: {
        return state;
    }
    }
};
