import {connect} from 'react-redux';

import {
    createCategory,
    createCategoryReload,
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
    updateCategory: body => dispatch(createCategory(body)),
    reloadCategoryUpdating: () => dispatch(createCategoryReload()),
});

export const withCategoryUpdating = connect(mapStateToProps, mapDispatchToProps);
