import {connect} from 'react-redux';

import {
    updateCategory,
    updateCategoryReload,
} from '@/redux/actions/category';

const mapStateToProps = ({category}) => {
    const {
        categoryUpdatingInProgress,
        categoryUpdatingError,
        categoryUpdatingSuccess,
    } = category;

    return {
        categoryUpdatingInProgress,
        categoryUpdatingError,
        categoryUpdatingSuccess,
    };
};

const mapDispatchToProps = dispatch => ({
    updateCategory: (id, body) => dispatch(updateCategory(id, body)),
    reloadCategoryUpdating: () => dispatch(updateCategoryReload()),
});

export const withCategoryUpdating = connect(mapStateToProps, mapDispatchToProps);
