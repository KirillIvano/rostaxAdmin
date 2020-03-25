import React from 'react';
import styles from './styles.less';

const CloseIcon = ({close}) => (
    <div className={styles.closeIconContainer}>
        <div
            onClick={close}
            className={styles.closeIcon}
        />
    </div>
);

export default CloseIcon;
