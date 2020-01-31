import {ofType} from 'redux-observable';
import {empty} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';

import {INITIALIZE_STATE} from '@/redux/actions';
import {setTemplateAction} from '@/redux/actions/template';
import {setRulesAction} from '@/redux/actions/rules';


const templateEpic =
    $action => $action.pipe(
        ofType(INITIALIZE_STATE),
        mergeMap(
            () => ajax.getJSON(`${SERVER_PATH}getTemplate`).pipe(
                mergeMap(data => [
                    setRulesAction(data.rules),
                    setTemplateAction(data.entities),
                ]),
            ),
            empty(),
        ),
    );

export default templateEpic;
