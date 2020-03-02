import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import styles from './styles.less';
import {
    loginStartAction,
    forgetLoginErrorAction,
} from '@/redux/actions/login';
import {
    Button,
    Input,
    AppearingMessage,
    ContentWrapper,
} from '@/components';

const Login = ({
    forgetLoginError,
    login,

    success,
    error,
    loading,
}) => {
    if (success) {
        return <Redirect to='/main' />;
    }

    const [validationError, setValidationError] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        forgetLoginError();

        if (!name || name.length === 0 || !password || password === 0) {
            setValidationError('Имя и пароль обязательны');
            return;
        }

        setValidationError('');
        login({
            name,
            password,
        });
    };

    return (
        <ContentWrapper>
            <form onSubmit={handleSubmit} action="">
                <Input
                    labelText='Ваш логин'
                    onChange={e => setName(e.currentTarget.value)}
                    value={name}

                    placeholder='логин'
                    name='login'
                    type='text'
                />
                <Input
                    labelText='Ваш пароль'
                    onChange={e => setPassword(e.currentTarget.value)}
                    value={password}

                    placeholder='пароль'
                    name='password'
                    type='password'
                />

                <Button
                    className={styles.submitButton}
                    type='submit'
                    disabled={loading}
                >
                    Подтвердить
                </Button>

                <AppearingMessage
                    styling='error'
                >
                    {validationError}
                </AppearingMessage>
                <AppearingMessage
                    styling='error'
                >
                    {error}
                </AppearingMessage>
            </form>
        </ContentWrapper>
    );
};

const mapStateToProps = ({login}) => login;

const mapDispatchToProps = dispatch => ({
    login: body => dispatch(loginStartAction(body)),
    forgetLoginError: () => dispatch(forgetLoginErrorAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
