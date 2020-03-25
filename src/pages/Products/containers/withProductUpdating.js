import {connect} from 'react-redux';

import {
    updateProduct,
    updateProductReload,
} from '@/entities/category/actions';
import {withAuthentication} from '@/redux/highOrderActions/withAuthentication';

const mapStateToProps = ({product}) => {
    const {
        productUpdatingInProgress,
        productUpdatingError,
        productUpdatingSuccess,
    } = product;

    return {
        productUpdatingInProgress,
        productUpdatingError,
        productUpdatingSuccess,
    };
};

const mapDispatchToProps = dispatch => ({
    updateProduct: (id, body) => dispatch(withAuthentication(updateProduct(id, body))),
    reloadProductUpdating: () => dispatch(updateProductReload()),
});

export const withProductUpdating = connect(mapStateToProps, mapDispatchToProps);
