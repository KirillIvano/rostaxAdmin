import {connect} from 'react-redux';

import {
    updateCategory,
    updateCategoryReload,
} from '@/redux/actions/category';
import {withAuthentication} from '@/redux/highOrderActions/withAuthentication';

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
    updateCategory: (id, body) => dispatch(withAuthentication(updateCategory(id, body))),
    reloadCategoryUpdating: () => dispatch(updateCategoryReload()),
});

export const withCategoryUpdating = connect(mapStateToProps, mapDispatchToProps);
