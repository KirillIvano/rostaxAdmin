import {connect} from 'react-redux';

import {getCategories} from '@/entities/category/actions';
import {withAuthentication} from '@/redux/highOrderActions/withAuthentication';

const mapStateToProps = ({category}) => {
    const {
        categories,
        categoriesLoading,
        categoriesError,
    } = category;

    return {
        categories: Object.values(categories),
        categoriesLoading,
        categoriesError,
    };
};

const mapDispatchToProps = dispatch => ({
    getCategories: () => dispatch(withAuthentication(getCategories())),
});

export const withCategoriesProps = connect(mapStateToProps, mapDispatchToProps);
