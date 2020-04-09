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

    if (
        !isUserAuthenticated &&
        !history.location.pathname.startsWith('/adminPanel/register') &&
         (
             history.location.pathname !== '/adminPanel/login'
         )
    ) {
        return <Redirect to={'/adminPanel/login'} />;
    }

    return (
        <>
            <div>
                {'asdas'}
            </div>
            <div>
                {'asadgsadg'}
            </div>
            <Header toggleMenu={toggleMenu} />
            <Navbar isMenuOpened={isMenuOpened} />
            <MessageBox />
            <PageWrapper>
                <Switch>
                    <Route exact
                        path="/adminPanel/categories"
                        component={CategoriesPage}
                    />
                    <Route exact
                        path="/adminPanel/products/:categoryId"
                        component={ProductsPage}
                    />
                    <Route exact
                        path="/adminPanel/register/:hash"
                        component={RegisterPage}
                    />
                    <Route exact
                        path="/adminPanel/login"
                        component={LoginPage}
                    />
                    <Route exact
                        path="/adminPanel/"
                        component={MainPage}
                    />
                </Switch>
            </PageWrapper>
        </>
    );
};

export default withAppInitialize(withAuthCheck(App));
