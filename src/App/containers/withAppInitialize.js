import {connect} from 'react-redux';

import {authFromMemoryAction} from '@/redux/actions/auth';
import {selectIfAuthenticated} from '@/redux/selectors/auth';

const mapStateToProps = state => ({
    isUserAuthenticated: selectIfAuthenticated(state),
});

const mapDispatchToProps = dispatch => ({
    tryAuth: () => dispatch(authFromMemoryAction()),
});

export const withAppInitialize = connect(mapStateToProps, mapDispatchToProps);
