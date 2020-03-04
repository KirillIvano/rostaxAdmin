import React from 'react';
import styles from './styles.less';

import {Button} from '@/components';

const EntityCard = ({
    children,
    modifyHandler,
    deleteHandler,
}) => {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                {children}
            </div>
            <div className={styles.controls}>
                <Button className={styles.button} onClick={modifyHandler}>
                    Редактировать
                </Button>
                <Button className={styles.button} onClick={deleteHandler} styling='danger'>
                    Удалить
                </Button>
            </div>
        </div>
    );
};

export default EntityCard;
