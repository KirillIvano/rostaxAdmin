import {connect} from 'react-redux';

import {
    deleteCategory,
    deleteCategoryReload,
} from '@/redux/actions/category';
import {
    showNormalMessage,
    showErrorMessage,
} from '@/redux/actions/message';

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

    showDeletingSuccessMessage: () => dispatch(
        showNormalMessage('Удаление коллекции', 'Коллекция была успешно удалена'),
    ),

    showDeletingErrorMessage: error => dispatch(
        showErrorMessage('Удаление коллекции', error),
    ),
});

export const withCategoryDeleting = connect(mapStateToProps, mapDispatchToProps);
