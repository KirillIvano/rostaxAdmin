import React from 'react';
import styles from './styles.less';
import ReactModal from 'react-modal';
import classnames from 'classnames';

const Modal = ({children, className}) => (
    <ReactModal
        bodyOpenClassName={styles.bodyOpen}
        overlayClassName={styles.modalOverlay}
        className={classnames(styles.modal, className)}
        isOpen={true}
    >
        {children}
    </ReactModal>
);

export default Modal;
