import React from 'react';
import DeleteItemModal from './DeleteItemModal';
import UpdateItemModal from './UpdateItemModal';
import AddItemModal from './AddItemModal';

export const ModalManager = ({
    id,
    type,
    isUpdateModalOpened,
    isAddModalOpened,
    isDeleteModalOpened=true,
    closeUpdateModal,
    closeAddModal,
    closeDeleteModal,
}) => {

    return (
        <>
            <UpdateItemModal
                isOpen={isUpdateModalOpened}
                close={closeUpdateModal}
            />
            <AddItemModal
                isOpen={isAddModalOpened}
                close={closeAddModal}
            />
            <DeleteItemModal
                isOpen={isDeleteModalOpened}
                close={closeDeleteModal}
            />
        </>
    );
};
