import React, {useCallback} from 'react';
import styles from './styles.less';

import {Button} from '@/components';

const EntityCard = ({
    children,
    updateHandler,
    deleteHandler,
    redirectHandler,

    entityId,
}) => {
    const handleUpdate = useCallback(() => updateHandler(entityId), [entityId]);
    const handleDelete = useCallback(() => deleteHandler(entityId), [entityId]);
    const handleRedirect = useCallback(() => redirectHandler(entityId), [entityId]);

    return (
        <div className={styles.card}>
            <div className={styles.content}>
                {children}
            </div>
            <div className={styles.controls}>
                <Button className={styles.button} onClick={handleUpdate}>
                    Редактировать
                </Button>
                <Button className={styles.button} onClick={handleRedirect}>
                    Перейти
                </Button>
                <Button className={styles.button} onClick={handleDelete} styling='danger'>
                    Удалить
                </Button>
            </div>
        </div>
    );
};

export default EntityCard;
