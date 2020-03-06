import React, {useEffect, useRef} from 'react';

import {ConfirmationModal} from '@/components';
import {withCategoryDeleting} from './../../containers/withCategoryDeleting';

const DeleteModal = ({
    deletedId,

    handleClose,
    isOpen,

    // from redux
    deleteCategory,

    categoryDeletingInProgress,
    categoryDeletingError,
    categoryDeletingSuccess,

    showDeletingSuccessMessage,
    showDeletingErrorMessage,
}) => {
    useEffect(() => {
        // if succeed
        if (categoryDeletingSuccess) {
            showDeletingSuccessMessage();
            handleClose();
        }
    }, [categoryDeletingSuccess]);

    useEffect(() => {
        if (categoryDeletingError) {
            showDeletingErrorMessage(categoryDeletingError);
            handleClose();
        }
    }, [categoryDeletingError]);


    if (categoryDeletingInProgress) {
        return 'LOADING...';
    }



    return (
        <ConfirmationModal
            isOpen={isOpen}
            handleClose={handleClose}
            handleConfirm={() => deleteCategory(deletedId)}
        >
            Вы уверены, что хотите удалить данную категорию?
        </ConfirmationModal>
    );
};

export default withCategoryDeleting(DeleteModal);
