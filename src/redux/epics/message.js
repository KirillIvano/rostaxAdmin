import {ofType} from 'redux-observable';
import {delay, mapTo} from 'rxjs/operators';

const FADING_TIMEOUT = 5000;

import {PUSH_MESSAGE} from '@/redux/names/message';
import {removeLastMessage} from '@/redux/actions/message';

export const messageEpic =
    action$ =>
        action$.pipe(
            ofType(PUSH_MESSAGE),
            delay(FADING_TIMEOUT),
            mapTo(removeLastMessage()),
        );
