// @flow

import React from 'react';
import type {Node} from 'react';
import classnames from 'classnames';

import styles from './styles.less';

type ApperingMessageProps = {
    children: Node,
    className?: String,
    styling?: 'error' | 'normal',
};

const AppearingMessage = ({
    children,
    className,
    styling='normal',
}: ApperingMessageProps) => (
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

const enchancedAppearingMessage = React.memo<ApperingMessageProps>(AppearingMessage);

export default enchancedAppearingMessage;
