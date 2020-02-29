import React from 'react';
import classnames from 'classnames';

import styles from './styles.less';

const Button = ({
    children,
    className,

    ...props
}) => (
    // eslint-disable-next-line react/button-has-type
    <button className={classnames(styles.button, className)} {...props}>
        {children}
    </button>
);

export default Button;
