import React from 'react';
import {render} from 'react-dom';
import {Provider as StoreProvider} from 'react-redux';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';


import store from './redux';
import './main.less';
import {
    Header,
    Navbar,
    MessageBox,
} from '@/parts';
import {PageWrapper} from '@/components';
import {
    RegisterPage,
    LoginPage,
    MainPage,
    CategoriesPage,
} from '@/pages';
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
            <MessageBox />
            <PageWrapper>
                <Switch>
                    <Route exact path="/categories" component={CategoriesPage} />
                    <Route exact path="/register/:hash" component={RegisterPage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/" component={MainPage} />
                </Switch>
            </PageWrapper>
            {/*<Modal></Modal> */}
        </>
    );
};

render(
    <StoreProvider store={store()}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root'),
);
