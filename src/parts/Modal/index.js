import React from 'react';
import styles from './styles.less';
import ReactModal from 'react-modal';
import classnames from 'classnames';

const CloseIcon = ({close}) => <div onClick={close} className={styles.closeIcon}></div>;

const Modal = ({
    children,
    close,

    className,
}) => (
    <ReactModal
        bodyOpenClassName={styles.bodyOpen}
        overlayClassName={styles.modalOverlay}
        className={classnames(styles.modal, className)}
        isOpen={true}
    >
        <CloseIcon close={close} />
        {children}
    </ReactModal>
);

export default Modal;
