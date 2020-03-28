import {useState} from 'react';
import {useModalState} from '@/hooks/useModalState';

export const useUpdateModalState = () => {
    const {isModalOpened, open, close} = useModalState();
    const [updatedId, changeUpdatedId] = useState(null);

    const openUpdateModal = id => {
        changeUpdatedId(id);
        open();
    };

    return {
        isUpdateModalOpened: isModalOpened,
        openUpdateModal,
        closeUpdateModal: close,
        updatedId,
    };
};
