import React from 'react';
import {render} from 'react-dom';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';

import './main.less';
import {
    Header,
    Navbar,
} from '@/parts';
import {PageWrapper} from '@/components';
import {RegisterPage} from '@/pages';
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
            <PageWrapper>
                <Switch>
                    <Route exact path="/register/:hash" component={RegisterPage} />
                </Switch>
            </PageWrapper>
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
