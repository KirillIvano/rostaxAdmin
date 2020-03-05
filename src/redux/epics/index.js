import {combineEpics} from 'redux-observable';

import {registerEpic} from './register';
import {loginEpic} from './login';
import {messageEpic} from './message';
import {getCategoriesEpic} from './categories';

export default combineEpics(
    registerEpic,
    loginEpic,
    messageEpic,
    getCategoriesEpic,
);
