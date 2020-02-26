import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './main.less';
import {
    Header,
    Modal,
} from './parts';

const App = () => {
    return (
        <>
            <Header />
            <Modal>
                content
            </Modal>
        </>
    );
};

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'),
);
