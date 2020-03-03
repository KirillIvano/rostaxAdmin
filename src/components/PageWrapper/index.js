import React from 'react';
import styles from './styles.less';

const PageWrapper = ({children}) => (
    <section className={styles.pageWrapper} >
        {children}
    </section>
);

export default PageWrapper;
