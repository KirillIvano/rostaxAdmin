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
    showDeletingSuccessMessage,
    showDeletingErrorMessage,
    reloadCategoryDeleting,
}) => {
    useEffect(() => {
        // if succeed
        if (categoryDeletingSuccess) {
            showDeletingSuccessMessage();
            reloadCategoryDeleting();
            handleClose();
        }
    }, [categoryDeletingSuccess]);

    useEffect(() => {
        if (categoryDeletingError) {
            showDeletingErrorMessage(categoryDeletingError);
            reloadCategoryDeleting();
            handleClose();
        }
    }, [categoryDeletingError]);

    return (
        <ConfirmationModal
            isOpen={isOpen}
            handleClose={handleClose}
            areControlsDisabled={categoryDeletingInProgress}
            handleConfirm={() => deleteCategory(deletedId)}
        >
            Вы уверены, что хотите удалить данную категорию?
        </ConfirmationModal>
    );
};

export default withCategoryDeleting(DeleteModal);
