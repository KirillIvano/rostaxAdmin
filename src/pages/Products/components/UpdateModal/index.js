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
}) => {
    return (
        <Modal
            isOpen={isOpen}
            close={handleClose}
        >
            <DescriptionForm />

        </Modal>
    );
};

export default withProductUpdating(UpdateModal);
