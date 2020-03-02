import {combineEpics} from 'redux-observable';

import {registerEpic} from './register';
import {loginEpic} from './login';

export default combineEpics(registerEpic, loginEpic);
