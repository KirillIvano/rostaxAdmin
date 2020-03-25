import {connect} from 'react-redux';

import {
    createProduct,
    createProductReload,
} from '@/entities/category/actions';
import {withAuthentication} from '@/redux/highOrderActions/withAuthentication';

const mapStateToProps = ({product}) => {
    const {
        productCreatingInProgress,
        productCreatingError,
        productCreatingSuccess,
    } = product;

    return {
        productCreatingInProgress,
        productCreatingError,
        productCreatingSuccess,
    };
};

const mapDispatchToProps = dispatch => ({
    createProduct: body => dispatch(withAuthentication(createProduct(body))),
    reloadProductCreating: () => dispatch(createProductReload()),
});

export const withProductCreating = connect(mapStateToProps, mapDispatchToProps);
