import React, {useEffect} from 'react';

import {
    Switch,
    Route,
} from 'react-router-dom';

import {
    Header,
    Navbar,
    MessageBox,
} from '@/parts';
import {
    PageWrapper,
} from '@/components';
import {
    RegisterPage,
    LoginPage,
    MainPage,
    CategoriesPage,
} from '@/pages';
import {useNavbarState} from '@/hooks/useNavbarState';

import {withAppInitialize} from './containers/withAppInitialize';

const App = ({
    isUserAuthenticated,
    tryAuth,
}) => {
    const {
        isMenuOpened,
        toggleMenu,
    } = useNavbarState();

    useEffect(() => {
        tryAuth();
    }, []);

    return (
        <>
            <Header toggleMenu={toggleMenu} />
            <Navbar isMenuOpened={isMenuOpened} />
            <MessageBox />
            <PageWrapper>
                <Switch>
                    <Route exact path="/categories" render={() => <CategoriesPage isUserAuthenticated={isUserAuthenticated} />} />
                    <Route exact path="/products/:categoryId" component={CategoriesPage} />
                    <Route exact path="/register/:hash" component={RegisterPage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/" component={MainPage} />
                </Switch>
            </PageWrapper>
        </>
    );
};

export default withAppInitialize(App);
