import React from 'react';
import styles from './styles.less';
import {useScrollPosition} from './hooks/useScrollPosition';

const CardBox = ({
    children,
}) => {
    const {ref, scrollOffset} = useScrollPosition();

    return (
        <div className={styles.cardBoxContainer}>
            {/* TODO: add scrolling by carette moving */}
            <div
                hidden={scrollOffset < 0}
                className={styles.scrollBar}
                style={{top: scrollOffset}}
            ></div>

            <div ref={ref} className={styles.cardBox}>
                {children}
            </div>
        </div>
    );
};

export default CardBox;
