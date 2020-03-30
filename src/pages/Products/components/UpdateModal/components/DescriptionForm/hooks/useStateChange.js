import {useState, useRef} from 'react';

export const useStateChange = defaultVal => {
    const [state, setState] = useState(defaultVal);
    const isChanged = useRef(false);

    const changeValue = newVal => {
        isChanged.current = defaultVal !== newVal;
        setState(newVal);
    };

    return [state, isChanged.current, changeValue];
};
