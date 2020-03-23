// @flow

import {useState} from 'react';

export const useNavbarState = () => {
    const [isMenuOpened, setVisibility] = useState(false);

    const toggleMenu = () => setVisibility(val => !val);
    return {
        isMenuOpened,
        toggleMenu,
    };
};
