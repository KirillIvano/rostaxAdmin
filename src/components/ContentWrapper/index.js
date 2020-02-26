import React from 'react';
import styles from './styles.less';
import classnames from 'classnames';

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
