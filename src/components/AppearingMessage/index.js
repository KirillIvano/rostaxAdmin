import React from 'react';
import classnames from 'classnames';

import styles from './styles.less';

const AppearingMessage = ({
    children,
    className,
}) => (
    <p
        className={classnames(
            styles.message,
            className,
            {[styles.hidden]: !children},
        )}
    >
        {children}
    </p>
);

export default AppearingMessage;
