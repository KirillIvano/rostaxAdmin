import React from 'react';
import styles from './styles.less';


const PageHeadline = ({children}) => (
    <h1 className={styles.headline}>
        {children}
    </h1>
);

export default React.memo(PageHeadline);
