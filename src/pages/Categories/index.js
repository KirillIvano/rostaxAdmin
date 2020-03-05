import React, { useEffect } from 'react';
import {connect} from 'react-redux';

import styles from './styles.less';

import {
    ContentWrapper,
    EntityCard,
} from '@/components';
import {
    CardBox,
    Controls,
} from '@/parts';
import {getCategories} from '@/redux/actions/category';

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
    console.log(categories);
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
                            <div key={_id}>
                                {name}
                            </div>
                        ),
                    )
                }
            </CardBox>
            <Controls />
        </ContentWrapper>
    );
};

const mapStateToProps = ({category}) => {
    const {
        categories,
        categoriesLoading,
        categoriesError,
    } = category;

    return {
        categories,
        categoriesLoading,
        categoriesError,
    };
};

const mapDispatchToProps = dispatch => ({
    getCategories: () => dispatch(getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
