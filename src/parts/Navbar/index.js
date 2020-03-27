import React from 'react';
import classnames from 'classnames';
import {Link} from 'react-router-dom';

import styles from './styles.less';
import {withAuthInfo} from './containers/withAuthInfo';

const Navbar = ({
    unlogin,
    isMenuOpened,
    isUserAuthenticated,
}) => (
    <nav
        className={
            classnames(
                styles.navbar,
                {[styles.opened]: isMenuOpened},
            )}
    >
        <Link to={'/main'} className={styles.navitem}>
            ГЛАВНАЯ
        </Link>
        <Link to={'/categories'} className={styles.navitem}>
            КАТЕГОРИИ
        </Link>
        {
            isUserAuthenticated ?
                (
                    <p
                        onClick={unlogin}
                        className={styles.navitem}
                    >
                        ВЫХОД
                    </p>
                ) :
                (
                    <Link to={'/login'} className={styles.navitem}>
                        ЛОГИН
                    </Link>
                )
        }
    </nav>
);

export default withAuthInfo(Navbar);
