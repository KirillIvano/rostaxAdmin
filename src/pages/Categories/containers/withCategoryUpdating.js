import {connect} from 'react-redux';

import {
    updateCategory,
    updateCategoryReload,
} from '@/entities/category/actions';
import {withAuthentication} from '@/redux/highOrderActions/withAuthentication';
import {getImageUrl} from '@/helpers/getImageUrl';

const mapStateToProps = ({category}, {updatedId}) => {
    const {
        categoryUpdatingInProgress,
        categoryUpdatingError,
        categoryUpdatingSuccess,
        categories,
    } = category;

    const updatedCategory = categories[updatedId];
    const {name: prevName, image: prevImageName} = updatedCategory || {};

    return {
        categoryUpdatingInProgress,
        categoryUpdatingError,
        categoryUpdatingSuccess,
        prevName,
        prevImage: getImageUrl(prevImageName),
    };
};

const mapDispatchToProps = dispatch => ({
    updateCategory: (id, body) => dispatch(withAuthentication(updateCategory(id, body))),
    reloadCategoryUpdating: () => dispatch(updateCategoryReload()),
});

export const withCategoryUpdating = connect(mapStateToProps, mapDispatchToProps);
