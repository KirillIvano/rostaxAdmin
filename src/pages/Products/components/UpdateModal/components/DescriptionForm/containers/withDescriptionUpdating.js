import {connect} from 'react-redux';

import {updateProductDescription} from '@/entities/product/actions';

const mapDispatchToProps = (dispatch, {categoryId, productId}) => ({
    updateDescription: (description) => dispatch(updateProductDescription(categoryId, productId, description)),
});

export const withDescriptionUpating = connect(null, mapDispatchToProps);
