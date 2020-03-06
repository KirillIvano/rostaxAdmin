import {ofType} from 'redux-observable';
import {delay, mapTo} from 'rxjs/operators';

import {PUSH_MESSAGE} from '@/redux/names/message';
import {removeLastMessage} from '@/redux/actions/message';

const FADING_TIMEOUT = 5000;

const messageEpic =
    action$ =>
        action$.pipe(
            ofType(PUSH_MESSAGE),
            delay(FADING_TIMEOUT),
            mapTo(removeLastMessage()),
        );

export default messageEpic;

