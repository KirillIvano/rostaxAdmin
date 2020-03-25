import {connect} from 'react-redux';

import {
    loginStartAction,
    forgetLoginErrorAction,
} from '@/redux/actions/login';
import {showNormalMessage} from '@/entities/message/actions';

const mapStateToProps = ({login}) => login;

const mapDispatchToProps = dispatch => ({
    login: body => dispatch(loginStartAction(body)),
    forgetLoginError: () => dispatch(forgetLoginErrorAction()),
    showMessage: (title, content) => dispatch(showNormalMessage(title, content)),
});

export const withLoginProps = connect(mapStateToProps, mapDispatchToProps);
