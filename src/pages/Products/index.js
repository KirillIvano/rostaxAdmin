import React from 'react';

import {
    ContentWrapper,
} from '@/components';
import {
    CardBox,
    Controls,
} from '@/parts';
import {useDataLoadingStart} from '@/hooks/useDataLoadingStart';

import {
    useUpdateModalState,
    useCreateModalState,
    useDeleteModalState,
} from './hooks/';

import {
    DeleteModal,
    CreateModal,
    UpdateModal,
} from './components';

const ProductsPage = ({
    getProducts,

    products,
    productsLoading,
    productsLoadingError,
}) => {
    useDataLoadingStart(getProducts);

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

    if (categoriesLoading) {
        return (
            <div>
                loading
            </div>
        );
    }

    if (categoriesError) return <Preloader />;

    return (
        <ContentWrapper>
            <CardBox>
                {
                    categories.map(
                        ({name, id}) => (
                            <EntityCard
                                key={id}
                                deleteHandler={() => openDeleteModal(id)}
                                updateHandler={() => openUpdateModal(id)}
                            >
                                {name}
                            </EntityCard>
                        ),
                    )
                }
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


export default ProductsPage;
