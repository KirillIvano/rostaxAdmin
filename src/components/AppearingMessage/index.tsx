import React, {ReactNode} from 'react';
import classnames from 'classnames';

import styles from './styles.less';

type AppearingMessageProps = {
    children: ReactNode;
    className?: string;
    styling?: 'normal' | 'error'; 
};

const AppearingMessage: React.FC<AppearingMessageProps> = ({
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

const enchancedAppearingMessage = React.memo(AppearingMessage);

export default enchancedAppearingMessage;
