// @flow

import React from 'react';
import type {Node} from 'react';
import {Modal} from '@/components';

type InformationModalProps = {
    children: Node,
    isOpen: boolean,
    handleClose: () => any,
};

const InformationModal = ({
    children,
    isOpen,
    handleClose,
}: InformationModalProps) => (
    <Modal
        isOpen={isOpen}
        close={handleClose}
        closeable={true}
    >
        {children}
    </Modal>
);


export default InformationModal;
