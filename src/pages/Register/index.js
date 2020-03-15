import React, {useState, useEffect} from 'react';
import {
    Redirect,
    useParams,
} from 'react-router-dom';


import {ContentWrapper} from '@/components';

import {
    Inputs,
    SubmitButton,
    Messages,
} from './components';
import {withRegisterProps} from './containers/withRegisterProps';

const Register = ({
    register,
    forgetError,
    showMessage,

    success,
    loading,
    error,
}) => {
    if (success) {
        showMessage('Регистрация', 'Вы были успешно зарегистрированы');
        return <Redirect to="/categories" />;
    }

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [validationError, setValidationError] = useState();
    const {hash} = useParams();

    useEffect(() => {
        const name = sessionStorage.getItem('name');

        if (name) {
            setName(name);
        }
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        if (error) {
            forgetError();
        }

        if (!name || name.length < 6) {
            setValidationError('Логин должен состоять из более 5 символов');
            return;
        }
        if (!password || password.length < 8) {
            setValidationError('Пароль должен состоять из более 7 символов');
            return;
        }
        if (password !== passwordRepeat) {
            setValidationError('Пароли не совпадают');
            return;
        }

        setValidationError('');
        register(
            {
                name,
                password,
            },
            hash,
        );
    };

    return (
        <ContentWrapper>
            <form onSubmit={handleSubmit}>
                <Inputs
                    {...{
                        name,
                        setName,
                        password,
                        setPassword,
                        passwordRepeat,
                        setPasswordRepeat,
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

export default withRegisterProps(Register);
