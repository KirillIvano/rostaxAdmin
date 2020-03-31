import React, {
    useEffect,
    useCallback,
} from 'react';

import {Modal} from '@/components';

import {withProductUpdating} from '../../containers/withProductUpdating';
import {DescriptionForm} from './components';

const UpdateModal = ({
    isOpen,
    handleClose,
    categoryId,
    productId,
}) => {
    return (
        <Modal
            isOpen={isOpen}
            close={handleClose}
        >
            <DescriptionForm {...{categoryId, productId}} />
        </Modal>
    );
};

export default withProductUpdating(UpdateModal);
