import {connect} from 'react-redux';

import {
    deleteProduct,
    deleteProductReload,
} from '@/entities/category/actions';
import {withAuthentication} from '@/redux/highOrderActions/withAuthentication';

const mapStateToProps = ({product}) => {
    const {
        productDeletingInProgress,
        productDeletingError,
        productDeletingSuccess,
    } = product;

    return {
        productDeletingInProgress,
        productDeletingError,
        productDeletingSuccess,
    };
};

const mapDispatchToProps = dispatch => ({
    deleteProduct: id => dispatch(withAuthentication(deleteProduct(id))),
    reloadProductDeleting: () => dispatch(deleteProductReload()),
});

export const withProductDeleting = connect(mapStateToProps, mapDispatchToProps);
