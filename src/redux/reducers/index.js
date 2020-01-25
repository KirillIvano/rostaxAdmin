import {combineReducers} from 'redux';
import templateReducer from './template';
import rulesReducer from './rules';

export default combineReducers({
    rules: rulesReducer,
    template: templateReducer,
});