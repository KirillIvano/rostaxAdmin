import {combineReducers} from 'redux';

import {registerReducer} from './register';
import {loginReducer} from './login';
import {messageReducer} from './message';

export default combineReducers({
    register: registerReducer,
    login: loginReducer,
    message: messageReducer,
});
