// @flow

import React from 'react';
import type {Node} from 'react';
import classnames from 'classnames';

import styles from './styles.less';

type ButtonProps = {
    children?: Node,
    className?: string,
    styling?: 'normal' | 'danger' | 'success',
};

const Button = ({
    children,
    className,
    styling='normal',

    ...props
}: ButtonProps) => (
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

export default React.memo(Button);
