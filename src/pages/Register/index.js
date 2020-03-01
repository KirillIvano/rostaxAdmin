import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {
    Redirect,
    useParams,
} from 'react-router-dom';

import {
    registerStartAction,
    forgetRegisterErrorAction,
} from '@/redux/actions/register';

import {
    Input,
    ContentWrapper,
    Button,
    AppearingMessage,
} from '@/components';
import styles from './styles.less';


const Register = ({
    register,
    forgetError,

    success,
    loading,
    error,
}) => {
    const [name, setName] = useState('assasasasa');
    const [password, setPassword] = useState('assasasasa');
    const [passwordRepeat, setPasswordRepeat] = useState('assasasasa');
    const [validationError, setValidationError] = useState();
    const {hash} = useParams();

    useEffect(() => {
        const name = sessionStorage.getItem('name');

        if (name) {
            setName(name);
        }
    }, []);

    if (success) {
        return <Redirect to="/" />;
    }

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

        setValidationError(null);
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
                <Input
                    labelText="Ваш логин"
                    name="login"
                    placeholder="Имя"

                    onChange={e => setName(e.currentTarget.value)}
                    type="text"
                    value={name}
                />
                <Input
                    labelText="Ваш пароль"
                    name="password"
                    placeholder="Пароль"

                    onChange={e => setPassword(e.currentTarget.value)}
                    type="password"
                    value={password}
                />
                <Input
                    labelText="Повторите пароль"
                    name="password"
                    placeholder="Повтор"

                    onChange={e => setPasswordRepeat(e.currentTarget.value)}
                    type="password"
                    value={passwordRepeat}
                />
                <Button
                    className={styles.submitButton}
                    disabled={loading}
                    type="submit"
                >
                    Подтвердить
                </Button>
                <AppearingMessage className={styles.errorMessage}>
                    {validationError}
                </AppearingMessage>
                <AppearingMessage className={styles.errorMessage}>
                    {error}
                </AppearingMessage>
            </form>
        </ContentWrapper>
    );
};

const mapStateToProps = ({register}) => ({
    ...register,
});

const mapDispatchToProps = dispatch => ({
    register: (body, hash) => dispatch(registerStartAction(body, hash)),
    forgetError: () => dispatch(forgetRegisterErrorAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
