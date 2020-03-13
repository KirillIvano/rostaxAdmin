import React from 'react';
import {render} from 'react-dom';
import {Provider as StoreProvider} from 'react-redux';
import {
    BrowserRouter,
} from 'react-router-dom';

import App from './App';
import store from './redux';
import './common/main.less';

render(
    <StoreProvider store={store()}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root'),
);
