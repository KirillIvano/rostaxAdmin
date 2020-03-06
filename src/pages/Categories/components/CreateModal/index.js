import React, {useState, useEffect} from 'react';

import {
    Modal,
    Button,
    Input,
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
                    labelText={'Название категории'}
                    onChange={e => setName(e.currentTarget.value)}
                />
                <Input
                    labelText={'Фото категории'}
                    onChange={e => setImage(e.currentTarget.value)}
                    onFocus={() => setImagePreviewVisibility(false)}
                    onBlur={() => setImagePreviewVisibility(true)}
                />
                {
                    isImagePreviewVisible ?
                        <img className={styles.imagePreview} src={image} /> :
                        <div className={styles.imagePlaceholder}>
                            Тут будет фото
                        </div>
                }

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
