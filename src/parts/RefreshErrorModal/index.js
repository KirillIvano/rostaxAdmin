import React from 'react';

import {
    InformationModal,
} from '@/components';

import styles from './styles.less';

const RefreshErrorModal = ({
    isOpen,
    handleClose,
}) => (
    <InformationModal
        isOpen={isOpen}
        handleClose={handleClose}
    >
        <article className={styles.modalContent}>
            <h1 className={styles.healine}>
                Ошибка аутентификации
            </h1>
            <p className={styles.textline}>
                Произошло какое-то недоразумение!
            </p>
            <p className={styles.textline}>
                Возможно, вы очистили кэш во время работы.
            </p>
            <p className={styles.textline}>
                Пожалуйста, подтвердите ещё раз, что вы - это вы!
            </p>
        </article>
    </InformationModal>
);

export default RefreshErrorModal;
