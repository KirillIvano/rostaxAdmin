import React from 'react';
import styles from './styles.less';

type CloseIconProps = {
    close: () => any,
};

const CloseIcon = ({close}: CloseIconProps) => (
    <div className={styles.closeIconContainer}>
        <div
            onClick={close}
            className={styles.closeIcon}
        />
    </div>
);

export default CloseIcon;
