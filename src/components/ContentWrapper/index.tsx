import React from 'react';
import classnames from 'classnames';

import styles from './styles.less';

interface ContentWrapperProps {
    children: React.ReactElement;
    className: string;
}

const ContentWrapper:React.FC<ContentWrapperProps> = ({
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
