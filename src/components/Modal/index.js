// @flow

import React from 'react';
import type {Node} from 'react';

import ReactModal from 'react-modal';
import classnames from 'classnames';

import styles from './styles.less';
import {CloseIcon} from './components';

type ModalProps = {
    className?: string,
    width?: number,
    closeable?: boolean,
    children: Node,
    close?: () => any,
    isOpen: boolean,
}

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
