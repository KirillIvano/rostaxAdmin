import React from 'react';

import {
    InformationModal,
} from '@/components';

const RefreshErrorModal = ({
    isOpen,
    handleClose,
}) => (
    <InformationModal
        isOpen={isOpen}
        handleClose={handleClose}
    >
        <p>
            Произошло какое-то недоразумение!
            Возможно, вы очистили кэш во время работы.
            Пожалуйста, подтвердите ещё раз, что вы - это вы!
        </p>
    </InformationModal>
);

export default RefreshErrorModal;
