import React from 'react';

import styles from './styles.less';
import {ContentWrapper} from '@/components';
import {HeaderLogo, BackBtn} from './components';

const Header = () => (
    <header className={styles.header}>
        <ContentWrapper className={styles.headerContent}>
            <HeaderLogo />
            <BackBtn to={'/admin'} />
        </ContentWrapper>
    </header>
);

export default Header;
