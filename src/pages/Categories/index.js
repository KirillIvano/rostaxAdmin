import React, { useEffect } from 'react';

import {withCategoriesProps} from './containers/withCategoriesProps';
import {useDeleteModalState} from './hooks/useDeleteModalState';
import {DeleteModal} from './components';

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

            <Controls />

            <DeleteModal
                isOpen={isDeleteModalOpened}
                deletedId={deletedId}
                handleClose={closeDeleteModal}
            />
        </ContentWrapper>
    );
};


export default withCategoriesProps(Categories);
