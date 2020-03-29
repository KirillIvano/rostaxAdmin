import {connect} from 'react-redux';

import {
    deleteProduct,
    deleteProductReload,
} from '@/entities/product/actions';
import {withAuthentication} from '@/redux/highOrderActions/withAuthentication';

const mapStateToProps = ({product}) => {
    const {
        productDeletingInProgress,
        productDeletingError,
        productDeletingSuccess,
    } = product;

    return {
        deletingInProgress: productDeletingInProgress,
        deletingError: productDeletingError,
        deletingSuccess: productDeletingSuccess,
    };
};

const mapDispatchToProps = dispatch => ({
    startDeleting: (categoryId, productId) => dispatch(withAuthentication(deleteProduct(categoryId, productId))),
    reloadDeleting: () => dispatch(deleteProductReload()),
});

export const withProductDeleting = connect(mapStateToProps, mapDispatchToProps);
