import {combineEpics} from 'redux-observable';

import registerEpic from './register';
import loginEpic from './login';
import messageEpic from './message';
import categoriesEpic from './categories';

export default combineEpics(
    registerEpic,
    loginEpic,
    messageEpic,
    categoriesEpic,
);
