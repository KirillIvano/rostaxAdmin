import React, {useEffect} from 'react';
import {useHistory, Redirect} from 'react-router-dom';
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
    Preloader,
} from '@/components';
import {withAuthCheck} from '@/containers';
import {
    RegisterPage,
    LoginPage,
    MainPage,
    CategoriesPage,
    ProductsPage,
} from '@/pages';
import {useNavbarState} from '@/hooks/useNavbarState';

import {withAppInitialize} from './containers/withAppInitialize';

const App = ({
    isUserAuthenticated,
    isInitialAuthFinished,

    tryAuth,
}) => {
    const {
        isMenuOpened,
        toggleMenu,
    } = useNavbarState();
    const history = useHistory();

    // try to auth from memory
    useEffect(() => {
        tryAuth();
    }, []);

    if (!isInitialAuthFinished) {
        return <Preloader />;
    }

    if (!isUserAuthenticated && history.location.pathname !== '/login') {
        return <Redirect to={'/login'} />;
    }

    return (
        <>
            <Header toggleMenu={toggleMenu} />
            <Navbar isMenuOpened={isMenuOpened} />
            <MessageBox />
            <PageWrapper>
                <Switch>
                    <Route exact
                        path="/categories"
                        component={CategoriesPage}
                    />
                    <Route exact
                        path="/products/:categoryId"
                        component={ProductsPage}
                    />
                    <Route exact
                        path="/register/:hash"
                        component={RegisterPage}
                    />
                    <Route exact
                        path="/login"
                        component={LoginPage}
                    />
                    <Route exact
                        path="/"
                        component={MainPage}
                    />
                </Switch>
            </PageWrapper>
        </>
    );
};

export default withAppInitialize(withAuthCheck(App));
