import React from 'react';
import classnames from 'classnames';
import {Link} from 'react-router-dom';

import styles from './styles.less';
const Navbar = ({
    isMenuOpened,
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
        <Link to={'/login'} className={styles.navitem}>
            ЛОГИН
        </Link>
    </nav>
);

export default Navbar;
