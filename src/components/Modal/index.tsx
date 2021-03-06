import React from 'react';

import ReactModal from 'react-modal';
import classnames from 'classnames';

import styles from './styles.less';
import {CloseIcon} from './components';

type ModalProps = {
    className?: string;
    width?: number;
    closeable?: boolean;
    children: React.ReactNode;
    close?: () => void;
    isOpen: boolean;
};

const Modal = ({
    className,
    width=600,
    closeable=true,

    children,
    close,
    isOpen,

    ...extraProps
}: ModalProps) => (
    <ReactModal
        {...extraProps}

        bodyOpenClassName={styles.bodyOpen}
        overlayClassName={styles.modalOverlay}
        className={classnames(styles.modal, className)}
        style={{content: {width: `${width}px`}}}

        isOpen={isOpen}
        shouldCloseOnEsc={closeable}
        shouldCloseOnOverlayClick={false}

        onRequestClose={close}
    >
        {closeable ? <CloseIcon close={close} />: null}
        {children}
    </ReactModal>
);

ReactModal.setAppElement(document.body);

export default Modal;
