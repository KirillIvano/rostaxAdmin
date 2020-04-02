import {connect} from 'react-redux';

import {
    updateProduct,
    updateProductReload,
} from '@/entities/product/actions';
import {withAuthentication} from '@/redux/highOrderActions/withAuthentication';
import {getImageUrl} from '@/helpers/getImageUrl';

const mapStateToProps = ({product}, {productId}) => {
    const {
        productUpdatingInProgress,
        productUpdatingError,
        productUpdatingSuccess,
        products,
    } = product;

    const selectedProduct = products[productId] || {};
    const {
        name,
        price,
        shortDescription,
        type,
        image,
        certificate,
    } = selectedProduct;

    return {
        productUpdatingInProgress,
        productUpdatingError,
        productUpdatingSuccess,
        prevName: name,
        prevPrice: price,
        prevDescription: shortDescription,
        prevType: type,
        prevImage: getImageUrl(image),
        prevCertificate: getImageUrl(certificate),
    };
};

const mapDispatchToProps = (dispatch, {categoryId, productId}) => ({
    updateProduct: body => dispatch(withAuthentication(updateProduct(categoryId, productId, body))),
    reloadProductUpdating: () => dispatch(updateProductReload()),
});

export const withProductUpdating = connect(mapStateToProps, mapDispatchToProps);
