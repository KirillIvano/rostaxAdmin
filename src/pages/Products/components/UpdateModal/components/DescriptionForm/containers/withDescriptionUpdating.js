import {connect} from 'react-redux';

import {updateProductDescription} from '@/entities/product/actions';

const mapStateToProps = ({product}, {productId}) => ({
    sections: product.products[productId].description,
});

const mapDispatchToProps = (dispatch, {categoryId, productId}) => ({
    updateDescription: (description) => dispatch(updateProductDescription(categoryId, productId, description)),
});

export const withDescriptionUpating = connect(mapStateToProps, mapDispatchToProps);
