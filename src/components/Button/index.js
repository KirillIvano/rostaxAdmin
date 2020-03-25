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
        {...props}
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
    >
        {children}
    </button>
);

const enchancedButton = React.memo(Button);

export default enchancedButton;
