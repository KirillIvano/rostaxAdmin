import React from 'react';
import styles from './styles.less';

const Preloader = () => (
    <svg
        width="75"
        height="75"
        viewBox="0 0 75 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"

        className={styles.preloader}
    >
        <circle cx="37.5" cy="37.5" r="32.5" stroke="#C50000" strokeWidth="10" />
    </svg>
);

export default Preloader;
