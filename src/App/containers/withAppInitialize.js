import {connect} from 'react-redux';

import {checkAuthAction} from '@/redux/actions/auth';
import {selectIfAuthenticated} from '@/redux/selectors/auth';

const mapStateToProps = state => ({
    isUserAuthenticated: selectIfAuthenticated(state),
});

const mapDispatchToProps = dispatch => ({
    checkAuthentication: () => dispatch(checkAuthAction()),
});

export const withAppInitialize = connect(mapStateToProps, mapDispatchToProps);
