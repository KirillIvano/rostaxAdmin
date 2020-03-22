import React from 'react';
import classnames from 'classnames';

import styles from './styles.less';

const Button = ({
    children,
    className,
    styling='normal',

    ...props
}) => (
    // eslint-disable-next-line react/button-has-type
    <button
        className={
            classnames(
                styles.button,
                className,
                {
                    [styles.danger]: styling === 'danger',
                    [styles.normal]: styling === 'normal',
                    [styles.success]: styling === 'success',
                },
            )
        }
        {...props}
    >
        {children}
    </button>
);

export default React.memo(Button);
