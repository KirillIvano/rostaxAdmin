import {connect} from 'react-redux';

import {
    registerStartAction,
    forgetRegisterErrorAction,
} from '@/redux/actions/register';

const mapStateToProps = ({register}) => (register);

const mapDispatchToProps = dispatch => ({
    register: (body, hash) => dispatch(registerStartAction(body, hash)),
    forgetError: () => dispatch(forgetRegisterErrorAction()),
});

export const withRegisterProps = connect(mapStateToProps, mapDispatchToProps);
