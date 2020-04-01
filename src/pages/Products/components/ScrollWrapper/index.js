import React from 'react';
import styles from './styles.less';

const ScrollWrapper = ({children}) => (<div className={styles.sections}>
    {children}
</div>);

export default ScrollWrapper;
