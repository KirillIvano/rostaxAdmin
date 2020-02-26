import React from 'react';

import styles from './styles.less';
import {ContentWrapper} from '@/components';
import {HeaderLogo, HeaderBurger} from './components';

const Header = ({
    toggleMenu,
}) => (
    <header className={styles.header}>
        <ContentWrapper className={styles.headerContent}>
            <HeaderLogo />
            <HeaderBurger toggleMenu={toggleMenu} />
        </ContentWrapper>
    </header>
);

export default Header;
