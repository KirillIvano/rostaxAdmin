import {connect} from 'react-redux';

import {createCategory} from '@/redux/actions/category';
import {
    showNormalMessage,
    showErrorMessage,
} from '@/redux/actions/message';

const mapStateToProps = ({category}) => {
    const {
        categoryCreatingInProgress,
        categoryCreatingError,
        categoryCreatingSuccess,
    } = category;

    return {
        categoryCreatingInProgress,
        categoryCreatingError,
        categoryCreatingSuccess,
    };
};

const mapDispatchToProps = dispatch => ({
    createCategory: body => dispatch(createCategory(body)),

    showCreatingSuccessMessage: () => dispatch(
        showNormalMessage('Создание коллекции', 'Коллекция была успешно создана'),
    ),

    showCreatingErrorMessage: error => dispatch(
        showErrorMessage('Создание коллекции', error),
    ),
});

export const withCategoryCreating = connect(mapStateToProps, mapDispatchToProps);
