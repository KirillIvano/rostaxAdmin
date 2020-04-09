import React from 'react';

import { Modal, Button } from '@/components';

import styles from './styles.less';

type ModalControlsType = {
    handleConfirm: () => any;
    handleReject: () => any;
    disabled: boolean;
};

const ModalControls: React.FC<ModalControlsType> = ({
    handleConfirm,
    handleReject,
    disabled,
}) => (
        <div className={styles.controls}>
            <Button
                disabled={disabled}
                styling='danger'
                onClick={handleConfirm}
                className={styles.button}
            >
                {'Подтвердить'}
            </Button>
            <Button
                disabled={disabled}
                onClick={handleReject}
                className={styles.button}
            >
                {'Отмена'}
            </Button>
        </div>
    );

interface ConfirmationModalProps {
    children: React.ReactNode;
    handleConfirm: () => void;
    handleReject: () => void;
    isOpen: boolean;
    areControlsDisabled: boolean;
};

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
    children,

    handleConfirm,
    handleReject,
    isOpen,
    areControlsDisabled,

    ...modalProps
}) => (
        <Modal
            {...modalProps}

            isOpen={isOpen}
            width={400}
            closeable={false}
        >
            <div className={styles.modalContent}>
                <p className={styles.text}>
                    {children}
                </p>

                <ModalControls
                    disabled={areControlsDisabled}
                    handleConfirm={handleConfirm}
                    handleReject={handleReject}
                />
            </div>
        </Modal>
    );

export default ConfirmationModal;
