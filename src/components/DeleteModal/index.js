import React, {useEffect} from 'react';

import {ConfirmationModal} from '@/components';

const DeleteModal = ({
    deletedId,

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
            handleConfirm={() => startDeleting(deletedId)}
            handleReject={handleClose}
            areControlsDisabled={deletingInProgress}
        >
            Вы уверены, что хотите удалить это?
        </ConfirmationModal>
    );
};

export default DeleteModal;
