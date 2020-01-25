const defaultState = {
    authenticated: false,
    username: null,
    jwt: null,
};

const userReducer = ({
    state=defaultState,
    action
}) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                authenticated: action.authenticated,
                username: action.username,
                jwt: action.jwt,
            };
        case 'EXIT':
            return {...defaultState};
        default:
            return state;
    }
};

export default userReducer;