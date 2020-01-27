import React from 'react';
import ModalWindow from 'react-modal';

import styles from './styles.less';

const appEl = document.getElementById('root');

const CloseIcon = () => 
    <svg width="40" height="40" className="closeBtn" viewBox="0 0 40 40">
        <path
            stroke="black"
            strokeWidth="3"
            d="M5,5 L35,35 M5,35 L35 5"
        />
    </svg>


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
            <button
                onClick={close}
                className={styles.closeButton}
            >
                <CloseIcon />
            </button>

            <div className={styles.content}>
                {children}
            </div>
        </ModalWindow>
    );
};

export default Modal;