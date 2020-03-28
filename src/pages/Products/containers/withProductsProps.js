import {connect} from 'react-redux';

import {getProducts} from '@/entities/product/actions';
import {withAuthentication} from '@/redux/highOrderActions/withAuthentication';

const mapStateToProps = ({product, category}, {match: {params}}) => {
    const {categoryId} = params;
    const {categories} = category;

    const {
        products,
        productsLoading,
        productsError,
    } = product;

    const categoryProductIds = categories[categoryId].productIds;

    let productsArr;
    if (!categoryProductIds) productsArr = [];
    else productsArr = categoryProductIds.map(id => products[id]);
    console.log(productsArr);

    return {
        products: productsArr,
        productsLoading,
        productsError,
    };
};

const mapDispatchToProps = (dispatch, {match: {params}}) => {
    const {categoryId} = params;

    return  {
        getProducts: () => dispatch(withAuthentication(getProducts(categoryId))),
    };
};

export const withProductsProps = connect(mapStateToProps, mapDispatchToProps);
