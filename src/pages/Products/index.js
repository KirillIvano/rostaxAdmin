import React, {useEffect, useCallback} from 'react';
import {useParams, useHistory} from 'react-router-dom';

import {
    ContentWrapper,
    EntityCard,
    Preloader,
    DeleteModal,
} from '@/components';
import {
    CardBox,
    Controls,
    PageHeadline,
} from '@/parts';

import {
    useUpdateModalState,
    useCreateModalState,
    useDeleteModalState,
} from '@/hooks';
import {withProductsProps} from './containers/withProductsProps';

import {
    CreateModal,
    UpdateModal,
} from './components';

const ProductCards = ({
    products,
    handleDelete,
    handleUpdate,
}) => products.map(
    ({name, id}) => (
        <EntityCard
            key={id}
            deleteHandler={() => handleDelete(id)}
            updateHandler={() => handleUpdate(id)}
        >
            {name}
        </EntityCard>
    ),
);

const ProductsPage = ({
    getProducts,

    products,
    productsLoading,
    productsLoadingError,
}) => {
    const {categoryId} = useParams();
    const history = useHistory();

    useEffect(() => {
        getProducts(categoryId);
    }, []);

    const {
        isDeleteModalOpened,
        openDeleteModal,
        closeDeleteModal,
        deletedId,
    } = useDeleteModalState();

    const {
        isCreateModalOpened,
        openCreateModal,
        closeCreateModal,
    } = useCreateModalState();

    const {
        isUpdateModalOpened,
        openUpdateModal,
        closeUpdateModal,
        updatedId,
    } = useUpdateModalState();

    const handleGoBack = useCallback(
        () => {
            history.push('/categories');
        },
        [],
    );

    if (productsLoading) {
        return (
            <div>
                loading
            </div>
        );
    }

    if (productsLoadingError) return <Preloader />;

    return (
        <ContentWrapper>
            <PageHeadline>
                Продукты
            </PageHeadline>

            <CardBox>
                <ProductCards
                    products={products}
                    handleDelete={openDeleteModal}
                    handleUpdate={openUpdateModal}
                />
            </CardBox>

            <Controls
                handleGoBack={handleGoBack}
                handleCreating={openCreateModal}
            />

            <DeleteModal
                isOpen={isDeleteModalOpened}
                handleClose={closeDeleteModal}
                deletedId={deletedId}
            />
            <CreateModal
                categoryId={categoryId}
                isOpen={isCreateModalOpened}
                handleClose={closeCreateModal}
            />
            <UpdateModal
                isOpen={isUpdateModalOpened}
                handleClose={closeUpdateModal}
                updatedId={updatedId}
            />
        </ContentWrapper>
    );
};

export default withProductsProps(ProductsPage);
