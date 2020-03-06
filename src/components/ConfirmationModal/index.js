import React from 'react';

import {Modal, Button} from '@/components';

import styles from './styles.less';

const ModalControls = ({
    handleConfirm,
    handleClose,
    disabled,
}) => (
    <div className={styles.controls}>
        <Button
            disabled={disabled}
            styling='danger'
            onClick={handleConfirm}
            className={styles.button}
        >
            Подтвердить
        </Button>
        <Button
            disabled={disabled}
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
    areControlsDisabled,

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
                disabled={areControlsDisabled}
                handleConfirm={handleConfirm}
                handleClose={handleClose}
            />
        </div>
    </Modal>
);

export default ConfirmationModal;
