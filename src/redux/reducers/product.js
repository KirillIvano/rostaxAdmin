import {
    GET_PRODUCTS_START,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,

    DELETE_PRODUCT_START,
    DELETE_PRODUCT_ERROR,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_RELOAD,

    CREATE_PRODUCT_START,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_ERROR,
    CREATE_PRODUCT_RELOAD,

    UPDATE_PRODUCT_START,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_ERROR,
    UPDATE_PRODUCT_RELOAD,
} from '@/entities/product/names';

const INITIAL_STATE = {
    products: {},
    productsLoading: false,
    productsError: null,

    productDeletingInProgress: false,
    productDeletingError: null,
    productDeletingSuccess: false,

    productCreatingInProgress: false,
    productCreatingError: null,
    productCreatingSuccess: false,

    productUpdatingInProgress: false,
    productUpdatingError: null,
    productUpdatingSuccess: false,
};

export const productReducer = (
    state=INITIAL_STATE,
    action,
) => {
    const {type, payload} = action;

    switch (type) {
    case GET_PRODUCTS_START: {
        return {
            ...state,
            productsLoading: true,
            productsError: null,
        };
    }
    case GET_PRODUCTS_SUCCESS: {
        const {products} = payload;

        return {...state, productsLoading: false, products};
    }
    case GET_PRODUCTS_ERROR: {
        const {error} = payload;
        return {
            ...state,
            productsLoading: false,
            products: {},
            productsError: error,
        };
    }

    case DELETE_PRODUCT_START: {
        return {
            ...state,
            productDeletingError: null,
            productDeletingSuccess: false,
            productDeletingInProgress: true,
        };
    }
    case DELETE_PRODUCT_SUCCESS: {
        const {id} = payload;
        const {products} = state;

        const newCategories = products;
        delete newCategories[id];

        return {
            ...state,
            products: newCategories,
            productDeletingInProgress: false,
            productDeletingSuccess: true,
        };
    }
    case DELETE_PRODUCT_ERROR: {
        const {error} = payload;
        return {
            ...state,
            productDeletingInProgress: false,
            productDeletingError: error,
        };
    }
    case DELETE_PRODUCT_RELOAD: {
        return {
            ...state,
            productDeletingError: null,
            productDeletingSuccess: false,
            productDeletingInProgress: false,
        };
    }

    case CREATE_PRODUCT_START: {
        return {
            ...state,
            productCreatingInProgress: false,
            productCreatingError: null,
            productCreatingSuccess: false,
        };
    }
    case CREATE_PRODUCT_SUCCESS: {
        const {product} = payload;
        const {products} = state;
        const {id} = product;

        return {
            ...state,
            products: {...products, [id]: product},
            productCreatingInProgress: false,
            productCreatingSuccess: true,
        };
    }
    case CREATE_PRODUCT_ERROR: {
        const {error} = payload;

        return {
            ...state,
            productCreatingInProgress: false,
            productCreatingError: error,
        };
    }
    case CREATE_PRODUCT_RELOAD: {
        return {
            ...state,
            productCreatingInProgress: false,
            productCreatingError: null,
            productCreatingSuccess: false,
        };
    }

    case UPDATE_PRODUCT_START: {
        return {
            ...state,
            productUpdatingInProgress: true,
            productUpdatingError: null,
            productUpdatingSuccess: false,
        };
    }
    case UPDATE_PRODUCT_SUCCESS: {
        const {product} = payload;
        const {products} = state;
        const {id} = product;

        const newCategories = {...products};
        newCategories[id] = product;

        return {
            ...state,
            products: newCategories,
            productUpdatingInProgress: false,
            productUpdatingSuccess: true,
        };
    }
    case UPDATE_PRODUCT_ERROR: {
        const {error} = payload;

        return {
            ...state,
            productUpdatingInProgress: false,
            productUpdatingError: error,
        };
    }
    case UPDATE_PRODUCT_RELOAD: {
        return {
            ...state,
            productUpdatingInProgress: false,
            productUpdatingError: null,
            productUpdatingSuccess: false,
        };
    }
    default: {
        return state;
    }
    }
};
