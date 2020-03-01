import React, {useState} from 'react';
import styles from './styles.less';

import {
    Button,
    Input,
    AppearingMessage,
    ContentWrapper,
} from '@/components';

const Login = () => {
    const [validationError, setValidationError] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ContentWrapper>
            <form action="">
                <Input
                    labelText='Ваш логин'
                    onChange={e => setLogin(e.currentTarget.value)}
                    value={login}

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
                >
                    Подтвердить
                </Button>

            </form>
        </ContentWrapper>
    );
};

export default Login;
