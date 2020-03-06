import React, { useEffect } from 'react';

import {withCategoriesProps} from './containers/withCategoriesProps';
import {useDeleteModalState} from './hooks/useDeleteModalState';
import {useCreateModalState} from './hooks/useCreateModalState';
import {
    DeleteModal,
    CreateModal,
} from './components';

import {
    ContentWrapper,
    EntityCard,
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
}) => {
    useEffect(
        () => {
            getCategories();
        },
        [],
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

    if (categoriesLoading) {
        return (
            <div>
                loading
            </div>
        );
    }

    if (categoriesError) return categoriesError;

    return (
        <ContentWrapper>
            <CardBox>
                {
                    categories.map(
                        ({name, id}) => (
                            <EntityCard
                                key={id}
                                deleteHandler={() => openDeleteModal(id)}
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
                deletedId={deletedId}
                handleClose={closeDeleteModal}
            />
            <CreateModal
                isOpen={isCreateModalOpened}
                handleClose={closeCreateModal}
            />
        </ContentWrapper>
    );
};


export default withCategoriesProps(Categories);
