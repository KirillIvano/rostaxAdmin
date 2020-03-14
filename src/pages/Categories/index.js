import React, { useEffect } from 'react';

import {withCategoriesProps} from './containers/withCategoriesProps';

import {useDeleteModalState} from './hooks/useDeleteModalState';
import {useCreateModalState} from './hooks/useCreateModalState';
import {useUpdateModalState} from './hooks/useUpdateModalState';

import {
    DeleteModal,
    CreateModal,
    UpdateModal,
} from './components';

import {
    ContentWrapper,
    EntityCard,
    Preloader,
} from '@/components';
import {
    CardBox,
    Controls,
} from '@/parts';

const Categories = ({
    getCategories,

    categories,
    categoriesLoading,
    categoriesError,

    isUserAuthenticated,
}) => {
    useEffect(
        () => {
            getCategories();
        },
        [isUserAuthenticated],
    );

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


export default withCategoriesProps(Categories);
