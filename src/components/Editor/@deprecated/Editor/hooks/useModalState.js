import {useState} from 'react';

export const useModalState = () => {
    const [isModalOpened, setOpened] = useState(false);
    const openModal = () => setOpened(true);
    const closeModal = () => setOpened(false);

    return {
        isModalOpened,
        openModal,
        closeModal,
    };
};
