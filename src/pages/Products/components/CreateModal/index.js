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
import {withProductCreating} from '../../containers/withProductCreating';

const CreateModal = ({
    isOpen,
    handleClose,

    categoryCreatingInProgress,
    categoryCreatingError,
    categoryCreatingSuccess,

    createCategory,
    reloadCategoryCreating,
}) => {
    const [name, setName] = useState('');
    const {imageUrl, file, setFile} = useImagePreview();

    const resetData = useCallback(() => {
        setName('');
        setFile(null);
    });

    useEffect(() => {
        if (categoryCreatingSuccess) {
            reloadCategoryCreating();
            resetData();
            handleClose();
        }
    }, [categoryCreatingSuccess]);

    useEffect(() => {
        if (categoryCreatingError) {
            reloadCategoryCreating();
            handleClose();
        }
    }, [categoryCreatingError]);

    const handleSubmit = useCallback(
        e => {
            e.preventDefault();
            // TODO: validation
            createCategory({name, image: file});
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
                    disabled={categoryCreatingInProgress}
                    type="submit"
                >
                    Сохранить
                </Button>
            </form>
        </Modal>
    );
};

export default withProductCreating(CreateModal);