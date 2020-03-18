import React from 'react';

import {Modal} from '@/components';

const InformationModal = ({
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
