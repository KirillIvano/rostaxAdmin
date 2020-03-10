import {connect} from 'react-redux';

import {
    deleteCategory,
    deleteCategoryReload,
} from '@/redux/actions/category';

const mapStateToProps = ({category}) => {
    const {
        categoryDeletingInProgress,
        categoryDeletingError,
        categoryDeletingSuccess,
    } = category;

    return {
        categoryDeletingInProgress,
        categoryDeletingError,
        categoryDeletingSuccess,
    };
};

const mapDispatchToProps = dispatch => ({
    deleteCategory: id => dispatch(deleteCategory(id)),
    reloadCategoryDeleting: () => dispatch(deleteCategoryReload()),
});

export const withCategoryDeleting = connect(mapStateToProps, mapDispatchToProps);
