import React from 'react';
import {Modal} from '@/uicomponents';

export const UpdateItemModal = ({
    isOpen,
    close,
}) => {
    return <Modal stroke="" {...{close, isOpen}}>вы уверены, что хотите удалить {'ento'}</Modal>
};
