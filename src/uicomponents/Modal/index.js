import React from 'react';
import ModalWindow from 'react-modal';

import styles from './styles.less';

const appEl = document.getElementById('root');

const Modal = ({
    children,
    isOpen,
    close,
}) => {
    return (
        <ModalWindow 
            isOpen={isOpen}
            onRequestClose={close}
            closable={true}
            className={styles.modal}
            overlayClassName={styles.overlay}
            appElement={appEl}
        >
            {children}
        </ModalWindow>
    );
};

export default Modal;