// @flow

import React, {useEffect} from 'react';

import {ConfirmationModal} from '@/components';

type DeleteModalProps = {
    deletedId: string,

    handleClose: () => any,
    isOpen: boolean,

    deletingInProgress: boolean,
    deletingError: boolean,
    deletingSuccess: boolean,

    startDeleting: string => any,
    reloadDeleting: () => any,
}

const DeleteModal = ({
    deletedId,

    handleClose,
    isOpen,

    // from redux
    deletingInProgress,
    deletingError,
    deletingSuccess,

    startDeleting,
    reloadDeleting,
}: DeleteModalProps) => {
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
