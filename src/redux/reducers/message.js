import {
    POP_MESSAGE,
    PUSH_MESSAGE,
} from '@/redux/names/message';

const INITIAL_STATE = {
    messages: [],
};

const getNewState = state => {
    const {messages} = state;

    return {...state, messages: [...messages]};
};

export const messageReducer = (
    state=INITIAL_STATE,
    action,
) => {
    const {type, payload} = action;

    switch (type) {
    case POP_MESSAGE: {
        const newState = getNewState(state);
        newState.messages.pop();
        return newState;
    }
    case PUSH_MESSAGE: {
        const {message} = payload;
        const newState = getNewState(state);
        newState.messages.unshift(message);
        return newState;
    }
    default: {
        return state;
    }
    }
};
