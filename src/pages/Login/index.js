import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

import {ContentWrapper} from '@/components';

import {withLoginProps} from './containers/withLoginProps';
import {
    Inputs,
    SubmitButton,
    Messages,
} from './components';

const Login = ({
    forgetLoginError,
    login,
    showMessage,

    success,
    error,
    loading,
}) => {
    if (success) {
        showMessage('Вход', 'Вы успешно вошли в систему');
        return <Redirect to='/categories' />;
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
                <Inputs
                    {...{
                        name,
                        setName,
                        password,
                        setPassword,
                    }}
                />
                <SubmitButton
                    disabled={loading}
                />
                <Messages
                    error={error}
                    validationError={validationError}
                />
            </form>
        </ContentWrapper>
    );
};

export default withLoginProps(Login);
