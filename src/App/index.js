import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
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
    isAuthFromMemoryFinished,

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

    if (!isAuthFromMemoryFinished) {
        return <Preloader />;
    }

    if (!isUserAuthenticated) {
        history.push('/login');
    }

    // initializing the whole app
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
