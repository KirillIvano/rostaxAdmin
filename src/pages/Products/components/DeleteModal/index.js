import React, {useEffect} from 'react';

import {ConfirmationModal} from '@/components';
import {withCategoryDeleting} from './../../containers/withCategoryDeleting';

const DeleteModal = ({
    deletedId,

    handleClose,
    isOpen,

    // from redux
    categoryDeletingInProgress,
    categoryDeletingError,
    categoryDeletingSuccess,

    deleteCategory,
    reloadCategoryDeleting,
}) => {
    useEffect(() => {
        // if succeed
        if (categoryDeletingSuccess) {
            reloadCategoryDeleting();
            handleClose();
        }
    }, [categoryDeletingSuccess]);

    useEffect(() => {
        if (categoryDeletingError) {
            reloadCategoryDeleting();
            handleClose();
        }
    }, [categoryDeletingError]);

    return (
        <ConfirmationModal
            isOpen={isOpen}
            handleConfirm={() => deleteCategory(deletedId)}
            handleReject={handleClose}
            areControlsDisabled={categoryDeletingInProgress}
        >
            Вы уверены, что хотите удалить данную категорию?
        </ConfirmationModal>
    );
};

export default withCategoryDeleting(DeleteModal);
