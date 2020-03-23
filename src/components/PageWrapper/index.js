// @flow

import React from 'react';
import type {Node} from 'react';
import styles from './styles.less';

type PageWrapperProps = {
    children: Node,
}

const PageWrapper = ({children}: PageWrapperProps) => (
    <section className={styles.pageWrapper} >
        {children}
    </section>
);

export default PageWrapper;
