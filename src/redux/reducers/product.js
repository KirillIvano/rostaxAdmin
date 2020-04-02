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

    UPDATE_PRODUCT_DESCRIPTION,
    UPDATE_PRODUCT_DESCRIPTION_SUCCESS,
    UPDATE_PRODUCT_DESCRIPTION_ERROR,
    UPDATE_PRODUCT_DESCRIPTION_RELOAD,
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

    productDescriptionUpdatingInProgress: false,
    productDescriptionUpdatingError: null,
    productDescriptionUpdatingSuccess: false,
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

        const newProducts = {...products};
        delete newProducts[id];

        return {
            ...state,
            products: newProducts,
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

        const newProducts = {...products};
        newProducts[id] = product;

        return {
            ...state,
            products: newProducts,
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

    case UPDATE_PRODUCT_DESCRIPTION: {
        return {
            ...state,
            productDescriptionUpdatingInProgress: true,
            productDescriptionUpdatingError: null,
            productDescriptionUpdatingSuccess: false,
        };
    }
    case UPDATE_PRODUCT_DESCRIPTION_SUCCESS: {
        const {product} = payload;
        const {id} = product;

        const productsCopy = {...state.products};

        productsCopy[id] = product;
        return {
            ...state,
            products: productsCopy,
            productDescriptionUpdatingInProgress: false,
            productDescriptionUpdatingSuccess: true,
        };
    }
    case UPDATE_PRODUCT_DESCRIPTION_ERROR: {
        return {
            ...state,
            productDescriptionUpdatingInProgress: false,
            productDescriptionUpdatingError: true,
        };
    }
    case UPDATE_PRODUCT_DESCRIPTION_RELOAD: {
        return {
            ...state,
            productDescriptionUpdatingInProgress: false,
            productDescriptionUpdatingError: null,
            productDescriptionUpdatingSuccess: false,
        };
    }

    default: {
        return state;
    }
    }
};
