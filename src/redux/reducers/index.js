import {combineReducers} from 'redux';

import {registerReducer} from './register';
import {loginReducer} from './login';
import {authReducer} from './auth';

import {messageReducer} from './message';
import {categoryReducer} from './category';
import {productReducer} from './product';

export default combineReducers({
    register: registerReducer,
    login: loginReducer,
    auth: authReducer,

    message: messageReducer,
    category: categoryReducer,
    product: productReducer,
});
