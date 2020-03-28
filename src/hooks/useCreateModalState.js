import {useModalState} from '@/hooks/useModalState';

export const useCreateModalState = () => {
    const {isModalOpened, open, close} = useModalState();

    return {
        isCreateModalOpened: isModalOpened,
        openCreateModal: open,
        closeCreateModal: close,
    };
};
