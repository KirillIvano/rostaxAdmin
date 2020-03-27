import {connect} from 'react-redux';

import {selectIfAuthenticated} from '@/redux/selectors/auth';
import {unloginAction} from '@/redux/actions/auth';

const mapStateToProps = state => ({
    isUserAuthenticated: selectIfAuthenticated(state),
});

const mapDispatchToProps = dispatch => ({
    unlogin: () => dispatch(unloginAction()),
});

export const withAuthInfo = connect(mapStateToProps, mapDispatchToProps);
