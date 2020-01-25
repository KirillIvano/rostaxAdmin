import {
    SET_RULES
} from '@/redux/actions/rules';


const rulesReducer = (
    state={},
    action
) => {
    switch(action.type) {
        case SET_RULES: {
            return {
                ...action.payload
            };
        }
        default: {
            return state;
        }
    }
};

export default rulesReducer;