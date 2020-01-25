import {ofType} from 'redux-observable';
import {mergeMap} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';

import {INITIALIZE_STATE} from '@/redux/actions';
import {setTemplateAction} from '@/redux/actions/template';
import {setRulesAction} from '@/redux/actions/rules';


const templateEpic = 
    $action => $action.pipe(
        ofType(INITIALIZE_STATE),
        mergeMap(
            // eslint-disable-next-line no-undef
            () => ajax.getJSON(`${SERVER_PATH}getTemplate`).pipe(
                mergeMap(data => [
                    setRulesAction(data.rules),
                    setTemplateAction(data.entities),
                ])
            ),
        ),
    );

export default templateEpic;