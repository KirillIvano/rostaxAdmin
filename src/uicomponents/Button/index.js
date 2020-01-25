import React from 'react';
import styles from './styles.less';
import classnames from 'classnames';
import {empty} from './utils';

const Button = ({
    click,
    type='apply',
    children,
    disabled,
}) => {
    return (
        <button
            className={
                classnames(
                    styles.button,
                    styles[`button_${type || 'apply'}`],
                    disabled && styles.disabled
                )
            }
            onClick={disabled ? empty : click}
        >
            <span className={styles.text}>
                {children}
            </span>
        </button>
    );
};

export default Button;