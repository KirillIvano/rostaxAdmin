import {connect} from 'react-redux';

import {updateProductDescription} from '@/entities/product/actions';
import {showErrorMessage} from '@/entities/message/actions';

const mapStateToProps = ({product}, {productId}) => ({
    sections: product.products[productId].description,
});

const mapDispatchToProps = (dispatch, {categoryId, productId}) => ({
    updateDescription: description => dispatch(updateProductDescription(categoryId, productId, description)),
    showErrorMessage: (title, content) => dispatch(showErrorMessage(title, content)),
});

export const withDescriptionUpating = connect(mapStateToProps, mapDispatchToProps);
