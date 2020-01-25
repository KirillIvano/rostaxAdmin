import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import App from './components/App';
import store from './redux';
import './main.less';

const root = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store()}>
            <App />
        </Provider>
    </BrowserRouter>,
    root
);

