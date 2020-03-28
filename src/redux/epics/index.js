import {combineEpics} from 'redux-observable';

import registerEpic from './register';
import loginEpic from './login';
import messageEpic from './message';
import categoriesEpic from './categories';
import productsEpic from './products';
import authEpic from './auth';

export default combineEpics(
    registerEpic,
    loginEpic,
    messageEpic,
    categoriesEpic,
    productsEpic,
    authEpic,
);
