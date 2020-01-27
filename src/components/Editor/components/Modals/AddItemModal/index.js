import React from 'react';
import {Modal} from '@/uicomponents';

export const AddItemModal = ({
    isOpen,
    close,
}) => {
    
    return <Modal {...{close, isOpen}}>
        addItem
    </Modal>;
};