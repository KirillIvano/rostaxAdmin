import {connect} from 'react-redux';

import {getCategories} from '@/entities/category/actions';
import {withAuthentication} from '@/redux/highOrderActions/withAuthentication';

const mapStateToProps = ({category}) => {
    const {
        products,
        productsLoading,
        productsError,
    } = category;

    return {
        products,
        productsLoading,
        productsError,
    };
};

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(withAuthentication(getCategories())),
});

export const withProductsProps = connect(mapStateToProps, mapDispatchToProps);
