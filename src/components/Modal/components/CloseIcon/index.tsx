import React from 'react';
import styles from './styles.less';

interface CloseIconProps {
    close: () => void;
}

const CloseIcon: React.FC<CloseIconProps> = ({close}) => (
    <div className={styles.closeIconContainer}>
        <div
            onClick={close}
            className={styles.closeIcon}
        />
    </div>
);

export default CloseIcon;
