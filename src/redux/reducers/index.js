import {combineReducers} from 'redux';

import {registerReducer} from './register';
import {loginReducer} from './login';
import {messageReducer} from './message';
import {categoryReducer} from './category';

export default combineReducers({
    register: registerReducer,
    login: loginReducer,
    message: messageReducer,
    category: categoryReducer,
});
