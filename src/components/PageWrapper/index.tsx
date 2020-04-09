import React from 'react';
import styles from './styles.less';

interface PageWrapperProps {
    children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({children}) => (
    <section className={styles.pageWrapper} >
        {children}
    </section>
);

export default PageWrapper;
