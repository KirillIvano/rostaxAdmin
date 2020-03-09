import React, {useState, useEffect} from 'react';

import {
    Modal,
    Button,
    Input,
    FileInput,
} from '@/components';
import {useImagePreview} from '@/hooks/useImagePreview';

import styles from './styles.less';
import {withCategoryCreating} from './../../containers/withCategoryCreating';

const CreateModal = ({
    isOpen,
    handleClose,

    categoryCreatingInProgress,
    categoryCreatingError,
    categoryCreatingSuccess,

    createCategory,
    showCreatingSuccessMessage,
    showCreatingErrorMessage,
    reloadCategoryCreating,
}) => {
    useEffect(() => {
        if (categoryCreatingSuccess) {
            showCreatingSuccessMessage();
            reloadCategoryCreating();
            handleClose();
        }
    }, [categoryCreatingSuccess]);

    useEffect(() => {
        if (categoryCreatingError) {
            showCreatingErrorMessage(categoryCreatingError);
            reloadCategoryCreating();
            handleClose();
        }
    }, [categoryCreatingError]);

    const [name, setName] = useState('');
    const {imageUrl, file, setFile} = useImagePreview();

    const handleSubmit = e => {
        e.preventDefault();

        createCategory({name, image: file});
    };

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
                    disabled={categoryCreatingInProgress}
                    type="submit"
                >
                    Сохранить
                </Button>
            </form>
        </Modal>
    );
};

export default withCategoryCreating(CreateModal);
