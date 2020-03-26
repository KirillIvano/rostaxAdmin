import React, { useCallback } from 'react';

import {withCategoriesProps} from './containers/withCategoriesProps';

import {
    ContentWrapper,
    EntityCard,
    Preloader,
} from '@/components';
import {
    CardBox,
    Controls,
} from '@/parts';
import {useDataLoadingStart} from '@/hooks/useDataLoadingStart';

import {
    useDeleteModalState,
    useCreateModalState,
    useUpdateModalState,
} from './hooks';

import {
    DeleteModal,
    CreateModal,
    UpdateModal,
} from './components';
import { useHistory } from 'react-router-dom';

const Cards = ({
    categories,
    handleUpdate,
    handleDelete,
    handleRedirect,
}) => categories.map(
    ({name, id}) => (
        <EntityCard
            key={id}
            deleteHandler={() => handleDelete(id)}
            updateHandler={() => handleUpdate(id)}
            redirectHandler={() => handleRedirect(id)}
        >
            {name}
        </EntityCard>
    ),
);

const Categories = ({
    getCategories,

    categories,
    categoriesLoading,
    categoriesError,
}) => {
    useDataLoadingStart(getCategories);
    const history = useHistory();

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

    const handleRedirect = useCallback(
        id => {history.push(`/products/${id}`);},
        [],
    );

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
                <Cards
                    categories={categories}
                    handleDelete={openDeleteModal}
                    handleUpdate={openUpdateModal}
                    handleRedirect={handleRedirect}
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


export default withCategoriesProps(Categories);
