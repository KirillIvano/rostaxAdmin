import React from 'react';
import classnames from 'classnames';

import type {Node} from 'react';

import styles from './styles.less';

type ContentWrapperProps = {|
    children: Node,
    className?: string,
|};

const ContentWrapper = ({
    children,
    className,
}: ContentWrapperProps) => (
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
