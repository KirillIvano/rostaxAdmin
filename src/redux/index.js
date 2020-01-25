import {createStore, applyMiddleware, compose} from 'redux';
import {createEpicMiddleware} from 'redux-observable';

import epic from './epics';
import reducer from './reducers';

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
        const store = createStore(
            reducer,
            composeEnhancers(
                applyMiddleware(epicMiddleware)
            )
        );
        
        epicMiddleware.run(epic);

        return store;
    }
