import {combineEpics} from 'redux-observable';

import templateEpic from './template';

export default combineEpics(templateEpic);