import React from 'react';
import classnames from 'classnames';

import styles from './styles.less';

const AppearingMessage = ({
    children,
    className,
    styling='normal',
}) => (
    <p
        className={classnames(
            styles.message,
            className,
            {
                [styles.hidden]: !children,
                [styles.error]: styling === 'error',
            },
        )}
    >
        {children}
    </p>
);

export default  React.memo(AppearingMessage);
