import {connect} from 'react-redux';

import {
    updateProduct,
    updateProductReload,
} from '@/entities/product/actions';
import {withAuthentication} from '@/redux/highOrderActions/withAuthentication';

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
        prevImage: image,
        prevCertificate: certificate,
    };
};

const mapDispatchToProps = dispatch => ({
    updateProduct: (id, body) => dispatch(withAuthentication(updateProduct(id, body))),
    reloadProductUpdating: () => dispatch(updateProductReload()),
});

export const withProductUpdating = connect(mapStateToProps, mapDispatchToProps);
