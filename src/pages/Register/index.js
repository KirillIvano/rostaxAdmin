import React, {useState, useEffect} from 'react';

import {
    Input,
    ContentWrapper,
    Button,
} from '@/components';
import styles from './styles.less';


const Register = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    useEffect(() => {
        const name = sessionStorage.getItem('name');

        if (name) {
            setName(name);
        }
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <ContentWrapper>
            <form onSubmit={handleSubmit}>
                <Input
                    labelText="Ваш логин"
                    name="name"

                    onChange={e => setName(e.target.value)}
                    type="text"
                    value={name}
                />
                <Input
                    labelText="Ваш пароль"
                    name="password"

                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    value={password}
                />
                <Input
                    labelText="Повторите пароль"
                    name="password"

                    onChange={e => setPasswordRepeat(e.target.value)}
                    type="password"
                    value={passwordRepeat}
                />
                <Button
                    className={styles.submitButton}
                    onSubmit={handleSubmit}
                    type="submit"
                >
                    Подтвердить
                </Button>
            </form>
        </ContentWrapper>
    );
};

export default Register;
