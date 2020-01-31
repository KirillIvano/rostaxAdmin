import {compose} from 'recompose';

import {withLoadingState} from './withLoadingState';
import {withDataHistory} from './withDataHistory';
import {withModals} from './withModals';

export const withEditorProps = compose(
    withLoadingState,
    withDataHistory,
    withModals,
);
