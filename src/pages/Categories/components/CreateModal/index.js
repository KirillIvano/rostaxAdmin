import React, {useState, useEffect} from 'react';

import {
    Modal,
    Button,
    Input,
    FileInput,
} from '@/components';

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
}) => {
    useEffect(() => {
        if (categoryCreatingSuccess) {
            showCreatingSuccessMessage();
            handleClose();
        }
    }, [categoryCreatingSuccess]);

    useEffect(() => {
        if (categoryCreatingError) {
            showCreatingErrorMessage(categoryCreatingError);
        }
    }, [categoryCreatingError]);

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [isImagePreviewVisible, setImagePreviewVisibility] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        createCategory({name, image});
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

                    name={'image'}
                    onChange={e => setImage(e.currentTarget.value)}
                    onFocus={() => setImagePreviewVisibility(false)}
                    onBlur={() => setImagePreviewVisibility(true)}
                />

                {/* TODO: check if image can be getted*/}
                {/*
                    isImagePreviewVisible ?
                        <img className={styles.imagePreview} src={image} /> :
                        <div className={styles.imagePlaceholder}>
                            Тут будет фото
                        </div>
                */}

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
