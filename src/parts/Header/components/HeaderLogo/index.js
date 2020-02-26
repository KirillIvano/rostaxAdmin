import React from 'react';
import {animateScroll} from 'react-scroll';
import {Link} from 'react-router-dom';

import styles from './styles.less';
import logourl from '@/images/logo.svg';

const HeaderLogo = () => (
    <Link to={'/admin/main'}>
        <img
            onClick={animateScroll.scrollToTop}
            className={styles.logo}
            src={logourl}
        />
    </Link>
);

export default HeaderLogo;
