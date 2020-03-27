import {connect} from 'react-redux';

import {
    loginStartAction,
    forgetLoginErrorAction,
    loginForgetAction,
} from '@/redux/actions/login';

const mapStateToProps = ({login}) => login;

const mapDispatchToProps = dispatch => ({
    login: body => dispatch(loginStartAction(body)),
    forgetLoginError: () => dispatch(forgetLoginErrorAction()),
    loginForget: () => dispatch(loginForgetAction()),
});

export const withLoginProps = connect(mapStateToProps, mapDispatchToProps);
