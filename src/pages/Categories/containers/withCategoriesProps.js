import {connect} from 'react-redux';

import {getCategories} from '@/redux/actions/category';

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

export const withCategoriesProps = connect(mapStateToProps, mapDispatchToProps);
