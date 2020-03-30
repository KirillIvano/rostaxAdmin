import React, {
    useState,
    useEffect,
    useCallback,
} from 'react';

import {
    Modal,
    Button,
    Input,
    FileInput,
} from '@/components';
import {useImagePreview} from '@/hooks/useImagePreview';

import styles from './styles.less';
import {withProductUpdating} from '../../containers/withProductUpdating';

import {DescriptionForm} from './components';

const UpdateModal = ({
    updatedId,

    isOpen,
    handleClose,

    categoryUpdatingInProgress,
    categoryUpdatingError,
    categoryUpdatingSuccess,

    updateCategory,
    reloadCategoryUpdating,
}) => {
    const [name, setName] = useState('');
    const {imageUrl, file, setFile} = useImagePreview();

    const resetData = useCallback(() => {
        setName('');
        setFile(null);
    });

    useEffect(() => {
        if (categoryUpdatingSuccess) {
            reloadCategoryUpdating();
            resetData();
            handleClose();
        }
    }, [categoryUpdatingSuccess]);

    useEffect(() => {
        if (categoryUpdatingError) {
            reloadCategoryUpdating();
            handleClose();
        }
    }, [categoryUpdatingError]);

    const handleSubmit = useCallback(
        e => {
            e.preventDefault();
            updateCategory(updatedId, {name, image: file});
        },
        [name, file],
    );

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
