import React from 'react';
import classnames from 'classnames';

import styles from './styles.less';

const ContentWrapper = ({
    children,
    className,
}) => (
    <div className={
        classnames(
            styles.contentWrapper,
            className,
        )
    }>
        {children}
    </div>
);

export default ContentWrapper;
