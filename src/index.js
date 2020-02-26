import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './main.less';
import {
    Header,
    Navbar,
} from './parts';
import {useNavbarState} from './hooks/useNavbarState';

const App = () => {
    const {
        isMenuOpened,
        toggleMenu,
    } = useNavbarState();

    return (
        <>
            <Header toggleMenu={toggleMenu} />
            <Navbar isMenuOpened={isMenuOpened} />
            {/*<Modal></Modal> */}
        </>
    );
};

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'),
);
