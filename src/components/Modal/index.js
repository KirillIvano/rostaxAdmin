import React from 'react';
import ReactModal from 'react-modal';
import classnames from 'classnames';

import styles from './styles.less';
import {CloseIcon} from './components';


const Modal = ({
    children,
    close,
    width=600,
    closeable=true,
    isOpen,

    className,
    ...extraProps
}) => (
    <ReactModal
        bodyOpenClassName={styles.bodyOpen}
        overlayClassName={styles.modalOverlay}
        className={classnames(styles.modal, className)}
        isOpen={isOpen}
        shouldCloseOnEsc={closeable}
        shouldCloseOnOverlayClick={closeable}
        style={{content: {width: `${width}px`}}}
        {...extraProps}
    >
        {closeable ? <CloseIcon close={close} />: null}
        {children}
    </ReactModal>
);

ReactModal.setAppElement(document.body);

export default Modal;
