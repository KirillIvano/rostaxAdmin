import {connect} from 'react-redux';

import {createCategory} from '@/redux/actions/category';

const mapDispatchToProps = dispatch => ({
    createCategory: body => dispatch(createCategory(body)),
});

export const withCategoryCreating = connect(null, mapDispatchToProps);
