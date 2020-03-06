import React, { useEffect } from 'react';

import styles from './styles.less';
import {withCategoriesProps} from './containers/withCategoriesProps';

import {
    ContentWrapper,
    EntityCard,
    ConfirmationModal,
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
                        ({name, _id}) => (
                            <EntityCard key={_id}>
                                {name}
                            </EntityCard>
                        ),
                    )
                }
            </CardBox>
            <Controls />
            <ConfirmationModal>
                Вы точно хотите удалить категорию?
            </ConfirmationModal>
        </ContentWrapper>
    );
};


export default withCategoriesProps(Categories);
