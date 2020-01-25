import {
    SET_TEMPLATE,
    ADD_VALUE,
    ADD_ITEM,
    UPDATE_ITEM,
    DELETE_ITEM
} from '@/redux/actions/template';


const templateReducer = (
    state={
        isLoaded: false,
    },
    action
) => {
    console.log(state, action)
    switch(action.type) {
        case ADD_ITEM: {
            const {
                parentType,
                parentId,                
            } = action;

            return {
                ...state,
                [parentType]: {
                    [parentId]: {
                        childrenIds: [],
                    }
                },
            };
        }
        case ADD_VALUE: {
            return state;
        }
        case UPDATE_ITEM: {
            return state;
        }
        case DELETE_ITEM: {
            return state;
        }
        case SET_TEMPLATE: {
            return {
                isLoaded: true,
                ...action.payload
            };
        }
        default: {
            return state;
        }
    }
};

export default templateReducer;