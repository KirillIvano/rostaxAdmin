import {useEffect, useRef, useState} from 'react';

const SCROLLBOX_HEIGHT = 30;

export const useScrollPosition = () => {
    const ref = useRef(null);
    const [scrollOffset, setScrollOffset] = useState(-1);

    useEffect(() => {
        const {current: cardBox} = ref;

        // move carette on scroll
        const scrollHandler = () => {
            const scrollHeight = cardBox.scrollHeight;
            const clientHeight = cardBox.clientHeight;
            const scroll = cardBox.scrollTop;

            const totalScroll = scrollHeight - clientHeight;
            const part = scroll / totalScroll;

            setScrollOffset(part * (clientHeight - SCROLLBOX_HEIGHT));
        };

        cardBox.addEventListener('scroll', scrollHandler);

        return () => cardBox.removeEventListener('scroll', scrollHandler);
    }, []);

    return {
        ref,
        scrollOffset,
    };
};
