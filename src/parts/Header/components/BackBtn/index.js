import React from 'react';
import styles from './styles.less';
import {Link} from 'react-router-dom';

const BackBtn = ({to}) => (
    <Link to={to} className={styles.backBtn}>
        НАЗАД
    </Link>
);

export default BackBtn;
