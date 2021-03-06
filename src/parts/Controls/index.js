import React from 'react';
import styles from './styles.less';

import {Button} from '@/components';

const Controls = ({
    handleGoBack,
    handleCreating,

    isGoBackDisabled=false,
    isAddingDisabled=false,
}) => {
    return (
        <div className={styles.controls}>
            <Button
                onClick={handleGoBack}
                className={styles.button}
                disabled={isGoBackDisabled}
            >
                НАЗАД
            </Button>

            <Button
                onClick={handleCreating}
                className={styles.button}
                disabled={isAddingDisabled}
            >
                ДОБАВИТЬ
            </Button>
        </div>
    );
};

export default Controls;
