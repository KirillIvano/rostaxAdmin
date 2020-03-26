import {connect} from 'react-redux';

import {getCategories} from '@/entities/category/actions';
import {withAuthentication} from '@/redux/highOrderActions/withAuthentication';

const mapStateToProps = ({product}) => {
    const {
        products,
        productsLoading,
        productsError,
    } = product;

    return {
        products: Object.keys(products),
        productsLoading,
        productsError,
    };
};

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(withAuthentication(getCategories())),
});

export const withProductsProps = connect(mapStateToProps, mapDispatchToProps);
