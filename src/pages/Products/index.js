import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {
    ContentWrapper,
    EntityCard,
    Preloader,
    DeleteModal,
} from '@/components';
import {
    CardBox,
    Controls,
} from '@/parts';

import {
    useUpdateModalState,
    useCreateModalState,
    useDeleteModalState,
} from './hooks/';
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
            <CardBox>
                <ProductCards
                    products={products}
                    handleDelete={openDeleteModal}
                    handleUpdate={openUpdateModal}
                />
            </CardBox>

            <Controls
                handleCreating={openCreateModal}
            />

            <DeleteModal
                isOpen={isDeleteModalOpened}
                handleClose={closeDeleteModal}
                deletedId={deletedId}
            />
            <CreateModal
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
