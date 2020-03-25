import {connect} from 'react-redux';

import {
    createCategory,
    createCategoryReload,
} from '@/entities/category/actions';
import {withAuthentication} from '@/redux/highOrderActions/withAuthentication';

const mapStateToProps = ({category}) => {
    const {
        categoryCreatingInProgress,
        categoryCreatingError,
        categoryCreatingSuccess,
    } = category;

    return {
        categoryCreatingInProgress,
        categoryCreatingError,
        categoryCreatingSuccess,
    };
};

const mapDispatchToProps = dispatch => ({
    createCategory: body => dispatch(withAuthentication(createCategory(body))),
    reloadCategoryCreating: () => dispatch(createCategoryReload()),
});

export const withCategoryCreating = connect(mapStateToProps, mapDispatchToProps);
