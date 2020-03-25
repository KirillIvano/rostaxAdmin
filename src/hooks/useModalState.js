import {useState} from 'react';

export const useModalState = () => {
    const [isModalOpened, setVisibility] = useState(false);

    const open = () => setVisibility(true);
    const close = () => setVisibility(false);

    return {
        isModalOpened,
        open,
        close,
    };
};
