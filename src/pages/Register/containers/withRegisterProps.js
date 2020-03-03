import {connect} from 'react-redux';

import {
    registerStartAction,
    forgetRegisterErrorAction,
} from '@/redux/actions/register';
import {showNormalMessage} from '@/redux/actions/message';

const mapStateToProps = ({register}) => (register);

const mapDispatchToProps = dispatch => ({
    register: (body, hash) => dispatch(registerStartAction(body, hash)),
    forgetError: () => dispatch(forgetRegisterErrorAction()),
    showMessage: (title, content) => dispatch(showNormalMessage(title, content)),
});

export const withRegisterProps = connect(mapStateToProps, mapDispatchToProps);
