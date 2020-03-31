import React, {
    useEffect,
    useCallback,
} from 'react';

import {Modal} from '@/components';

import {withProductUpdating} from '../../containers/withProductUpdating';
import {DescriptionForm, MainPropsForm} from './components';

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
            <MainPropsForm {...{categoryId, productId}} />
            {/* <DescriptionForm {...{categoryId, productId}} /> */}
        </Modal>
    );
};

export default withProductUpdating(UpdateModal);
