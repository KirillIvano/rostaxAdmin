import React from 'react';
import Button from '@/uicomponents/Button';

import styles from './styles.less';

const Controls = ({
    popHistory,
    dirHistory,
}) => {
    return (
        <div className={styles.controls}>
            <Button disabled={dirHistory.length <= 0} click={popHistory}>Назад</Button>
        </div>
    );
};

export default Controls;