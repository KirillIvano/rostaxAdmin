import React from 'react';
import { Modal } from '@/components';

interface InformationModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    handleClose: () => void;
}

const InformationModal: React.FC<InformationModalProps> = ({
    children,
    isOpen,
    handleClose,
}) => (
    <Modal
        isOpen={isOpen}
        close={handleClose}
        closeable={true}
    >
        {children}
    </Modal>
);


export default InformationModal;
