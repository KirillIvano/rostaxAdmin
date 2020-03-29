import React, {useEffect} from 'react';

import {ConfirmationModal} from '@/components';

import {withProductDeleting} from './../../containers/withProductDeleting';


const DeleteModal = ({
    productId,
    categoryId,

    handleClose,
    isOpen,

    deletingInProgress,
    deletingError,
    deletingSuccess,

    startDeleting,
    reloadDeleting,
}) => {
    useEffect(() => {
        // if succeed
        if (deletingSuccess) {
            reloadDeleting();
            handleClose();
        }
    }, [deletingSuccess]);

    useEffect(() => {
        if (deletingError) {
            reloadDeleting();
            handleClose();
        }
    }, [deletingError]);

    return (
        <ConfirmationModal
            isOpen={isOpen}
            handleConfirm={() => startDeleting(categoryId, productId)}
            handleReject={handleClose}
            areControlsDisabled={deletingInProgress}
        >
            Вы уверены, что хотите удалить это?
        </ConfirmationModal>
    );
};

export default withProductDeleting(DeleteModal);
