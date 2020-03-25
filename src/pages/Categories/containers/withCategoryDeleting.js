import {connect} from 'react-redux';

import {
    deleteCategory,
    deleteCategoryReload,
} from '@/entities/category/actions';
import {withAuthentication} from '@/redux/highOrderActions/withAuthentication';

const mapStateToProps = ({category}) => {
    const {
        categoryDeletingInProgress,
        categoryDeletingError,
        categoryDeletingSuccess,
    } = category;

    return {
        deletingInProgress: categoryDeletingInProgress,
        deletingError: categoryDeletingError,
        deletingSuccess: categoryDeletingSuccess,
    };
};

const mapDispatchToProps = dispatch => ({
    startDeleting: id => dispatch(withAuthentication(deleteCategory(id))),
    reloadDeleting: () => dispatch(deleteCategoryReload()),
});

export const withCategoryDeleting = connect(mapStateToProps, mapDispatchToProps);
