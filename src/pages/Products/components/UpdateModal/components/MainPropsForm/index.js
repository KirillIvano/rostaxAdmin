import React, {useState, useEffect} from 'react';

import {
    LabeledInput,
    Button,
    FileInput,
} from '@/components';
import {useImagePreview} from '@/hooks/useImagePreview';

import styles from './styles.less';
import {withProductUpdating} from './containers/withProductUpdating';
import {ScrollWrapper} from './../../../';

const MainPropsForm = ({
    className,

    productUpdatingInProgress,
    productUpdatingError,
    productUpdatingSuccess,

    prevName,
    prevPrice,
    prevDescription,
    prevType,
    prevImage,
    prevCertificate,

    updateProduct,
    reloadProductUpdating,
    changeForm,
}) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [productType, setProductType] = useState('');

    const {imageUrl, file, setFile} = useImagePreview();
    const {imageUrl: certificateUrl, file: certificate, setFile: setCertificate} = useImagePreview();

    useEffect(
        () => {
            reloadProductUpdating();
        },
        [productUpdatingError],
    );

    useEffect(
        () => {
            setName('');
            setShortDescription('');
            setProductType('');
            setPrice('');
            setFile(null);
            setCertificate(null);
        },
        [productUpdatingSuccess],
    );


    const handleSubmit = e => {
        e.preventDefault();

        updateProduct(
            {
                name,
                price,
                shortDescription,
                productType,
                file,
                certificate,
            },
        );
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={className}
        >
            <ScrollWrapper>
                <LabeledInput
                    className={styles.input}
                    labelText={'Название категории'}
                    name={'name'}
                    value={name}
                    placeholder={prevName}

                    onChange={e => setName(e.currentTarget.value)}
                />
                <LabeledInput
                    className={styles.input}
                    labelText={'Цена продукта'}
                    name={'price'}
                    value={price}
                    placeholder={prevPrice}

                    onChange={e => setPrice(e.currentTarget.value)}
                />
                <LabeledInput
                    className={styles.input}
                    labelText={'Краткое описание продукта'}
                    name={'shortDescription'}
                    value={shortDescription}
                    placeholder={prevDescription}

                    onChange={e => setShortDescription(e.currentTarget.value)}
                />
                <LabeledInput
                    className={styles.input}
                    labelText={'Тип продукта'}
                    name={'type'}
                    value={productType}
                    placeholder={prevType}

                    onChange={e => setProductType(e.currentTarget.value)}
                />

                <FileInput
                    className={styles.input}
                    labelText={'Загрузить фото'}
                    background={imageUrl || prevImage}

                    name={'image'}
                    onChange={e => setFile(e.currentTarget.files[0])}
                />
                <FileInput
                    className={styles.input}
                    labelText={'Загрузить сертификат'}
                    background={certificateUrl || prevCertificate}

                    name={'image'}
                    onChange={e => setCertificate(e.currentTarget.files[0])}
                />
            </ScrollWrapper>
            <div className={styles.controlsSection}>
                <Button
                    className={styles.controlBtn}
                    disabled={productUpdatingInProgress}
                    onClick={changeForm}
                >
                    {'К описаниям'}
                </Button>
                <Button
                    className={styles.controlBtn}
                    disabled={productUpdatingInProgress}
                    type="submit"
                >
                    {'Сохранить'}
                </Button>
            </div>
        </form>
    );
};

export default withProductUpdating(MainPropsForm);



