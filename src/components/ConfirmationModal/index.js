import React from 'react';

import {Modal, Button} from '@/components';

import styles from './styles.less';

const ModalControls = ({
    handleConfirm,
    handleClose,
}) => (
    <div className={styles.controls}>
        <Button
            styling='danger'
            onClick={handleConfirm}
            className={styles.button}
        >
        Подтвердить
        </Button>
        <Button
            onClick={handleClose}
            className={styles.button}
        >
        Отмена
        </Button>
    </div>
);

const ConfirmationModal = ({
    children,

    handleConfirm,
    handleClose,
    isOpen,

    ...modalProps
}) => (
    <Modal
        isOpen={isOpen}
        close={handleClose}
        className={styles.modal}
        width={400}
        closeable={false}

        {...modalProps}
    >
        <div className={styles.modalContent}>
            <p className={styles.text}>
                {children}
            </p>

            <ModalControls
                handleConfirm={handleConfirm}
                handleClose={handleClose}
            />
        </div>
    </Modal>
);

export default ConfirmationModal;
