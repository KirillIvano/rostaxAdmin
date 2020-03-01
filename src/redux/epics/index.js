import {combineEpics} from 'redux-observable';

import {registerEpic} from './register';

export default combineEpics(registerEpic);
