import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    FORGET_REGISTER_ERROR,
} from '@/redux/names/register';

const INITIAL_STATE = {
    loading: false,
    success: false,
    error: null,
};

const registerReducer = (
    state=INITIAL_STATE,
    action,
) => {
    const {type, payload} = action;

    switch (type) {
    case REGISTER_START: {
        if (!state.loading) {
            return {...state, loading: true};
        }
        return state;
    }
    case REGISTER_ERROR: {
        const {error} = payload;
        return {...state, error, success: false, loading: false};
    }
    case REGISTER_SUCCESS: {
        return {...state, error: null, success: true, loading: false};
    }
    case FORGET_REGISTER_ERROR: {
        return {...state, error: null};
    }
    default: {
        return state;
    }
    }
};

export default registerReducer;
