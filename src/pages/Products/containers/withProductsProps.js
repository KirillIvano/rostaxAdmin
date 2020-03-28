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

    const selectedCategory = categories[categoryId];
    let productsArr = [];

    console.log(selectedCategory);

    if (selectedCategory){
        const categoryProductIds = selectedCategory.products;
        if (categoryProductIds) productsArr = categoryProductIds.map(id => products[id]);
    }


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
