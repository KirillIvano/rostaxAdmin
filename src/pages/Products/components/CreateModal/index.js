import React, {
    useState,
    useEffect,
    useCallback,
} from 'react';

import {
    Modal,
    Button,
    LabeledInput,
    FileInput,
    ConfirmationModal,
} from '@/components';
import {useImagePreview} from '@/hooks/useImagePreview';

import styles from './styles.less';
import {withProductCreating} from '../../containers/withProductCreating';

const CreateModal = ({
    isOpen,
    handleClose,
    categoryId,

    productCreatingInProgress,
    productCreatingError,
    productCreatingSuccess,
    createProduct,
    reloadProductCreating,
}) => {
    const [name, setName] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [productType, setProductType] = useState('');
    const [price, setPrice] = useState('');

    const {imageUrl, file, setFile} = useImagePreview();
    const {imageUrl: certificateUrl, file: certificate, setFile: setCertificate} = useImagePreview();

    const resetData = useCallback(() => {
        setName('');
        setFile(null);
    });

    useEffect(() => {
        if (productCreatingSuccess) {
            reloadProductCreating();
            resetData();
            handleClose();
        }
    }, [productCreatingSuccess]);

    useEffect(() => {
        if (productCreatingError) {
            reloadProductCreating();
        }
    }, [productCreatingError]);

    const handleSubmit = e => {
        e.preventDefault();
        // TODO: validation
        createProduct(
            categoryId,
            {
                name,
                price,
                type: productType,
                image: file,
                certificate,
                shortDescription,
            },
        );
    };

    return (
        <Modal
            isOpen={isOpen}
            close={handleClose}
        >
            <form onSubmit={handleSubmit}>
                <LabeledInput
                    className={styles.input}
                    labelText={'Название категории'}
                    name={'name'}
                    value={name}

                    onChange={e => setName(e.currentTarget.value)}
                />
                <LabeledInput
                    className={styles.input}
                    labelText={'Цена продукта'}
                    name={'price'}
                    value={price}

                    onChange={e => setPrice(e.currentTarget.value)}
                />
                <LabeledInput
                    className={styles.input}
                    labelText={'Краткое описание продукта'}
                    name={'shortDescription'}
                    value={shortDescription}

                    onChange={e => setShortDescription(e.currentTarget.value)}
                />
                <LabeledInput
                    className={styles.input}
                    labelText={'Тип продукта'}
                    name={'type'}
                    value={productType}

                    onChange={e => setProductType(e.currentTarget.value)}
                />

                <FileInput
                    className={styles.input}
                    labelText={'Загрузить фото'}
                    background={imageUrl}

                    name={'image'}
                    onChange={e => setFile(e.currentTarget.files[0])}
                />

                <FileInput
                    className={styles.input}
                    labelText={'Загрузить сертификат'}
                    background={certificateUrl}

                    name={'image'}
                    onChange={e => setCertificate(e.currentTarget.files[0])}
                />

                <div className={styles.saveBtnContainer}>
                    <Button
                        className={styles.saveButton}
                        disabled={productCreatingInProgress}
                        type="submit"
                    >
                        Сохранить
                    </Button>
                </div>
            </form>
        </Modal>
    );
};

export default withProductCreating(CreateModal);
