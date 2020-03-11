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
import {withCategoryUpdating} from './../../containers/withCategoryUpdating';

const UpdateModal = ({
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
            updateCategory({name, image: file});
        },
        [name, file],
    );

    return (
        <Modal
            isOpen={isOpen}
            close={handleClose}
        >
            <form onSubmit={handleSubmit}>
                <Input
                    className={styles.input}
                    labelText={'Название категории'}
                    name={'name'}
                    onChange={e => setName(e.currentTarget.value)}
                />

                <FileInput
                    className={styles.input}
                    labelText={'Загрузить фото'}
                    background={imageUrl}

                    name={'image'}
                    onChange={e => setFile(e.currentTarget.files[0])}
                />

                <Button
                    className={styles.saveButton}
                    disabled={categoryUpdatingInProgress}
                    type="submit"
                >
                    Применить
                </Button>
            </form>
        </Modal>
    );
};

export default withCategoryUpdating(UpdateModal);
