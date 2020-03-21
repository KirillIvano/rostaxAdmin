import {useState} from 'react';
import {useModalState} from '@/hooks/useModalState';

export const useDeleteModalState = () => {
    const {isModalOpened, open, close} = useModalState();
    const [deletedId, changeDeletedId] = useState(null);

    const openDeleteModal = id => {
        changeDeletedId(id);
        open();
    };

    return {
        isDeleteModalOpened: isModalOpened,
        openDeleteModal,
        closeDeleteModal: close,
        deletedId,
    };
};
