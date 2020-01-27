import React from 'react';
import {
    compose,
    withStateHandlers,
} from 'recompose';

import {ModalManager} from './../components/Modals';

const enchanceWithModalManager = Comp => {
    const ModaledComp = ({
        // нужны только самим модалкам
        isUpdateModalOpened,
        isAddModalOpened,
        isDeleteModalOpened,
        closeUpdateModal,
        closeAddModal,
        closeDeleteModal,

        ...props
    }) => (
            <>
                <Comp {...props} />
                <ModalManager {...{
                    isUpdateModalOpened,
                    isAddModalOpened,
                    isDeleteModalOpened,
                    closeUpdateModal,
                    closeAddModal,
                    closeDeleteModal
                }} />
            </>
        );

    return ModaledComp;
};

export const withModals = compose(
    withStateHandlers(
        {
            isUpdateModalOpened: false,
            isAddModalOpened: false,
            isDeleteModalOpened: false,
        },
        {
            openUpdateModal: () => () => ({isUpdateModalOpened: true}),
            openAddModal: () => () => ({isAddModalOpened: true}),
            openDeleteModal: () => () => ({isDeleteModalOpened: true}),

            closeUpdateModal: () => () => ({isUpdateModalOpened: false}),
            closeAddModal: () => () => ({isAddModalOpened: false}),
            closeDeleteModal: () => () => ({isDeleteModalOpened: false}),
        }
    ),
    enchanceWithModalManager,
);