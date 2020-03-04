import {useEffect, useRef, useState} from 'react';

const SCROLLBOX_HEIGHT = 30;

export const useScrollPosition = () => {
    const ref = useRef(null);
    const [scrollOffset, setScrollOffset] = useState(null);

    const [topShadow, setTopShadow] = useState(false);
    const [bottomShadow, setBottomShadow] = useState(true);

    useEffect(() => {
        const {current: cardBox} = ref;

        const scrollHandler = () => {
            const scrollHeight = cardBox.scrollHeight;
            const clientHeight = cardBox.clientHeight;
            const scroll = cardBox.scrollTop;

            const totalScroll = scrollHeight - clientHeight;
            const part = scroll / totalScroll;

            setScrollOffset(part * (clientHeight - SCROLLBOX_HEIGHT));
        };

        setTimeout(() => {
            cardBox.addEventListener('scroll', scrollHandler);
        }, 0);

        return () => cardBox.removeEventListener('scroll', scrollHandler);
    }, []);

    return {ref, scrollOffset, topShadow, bottomShadow};
};
