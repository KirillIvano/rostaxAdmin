import React from 'react';

import {
    Input,
} from '@/components';

import styles from './styles.less';

const Imports = ({
    password,
    setPassword,
    name,
    setName,
    passwordRepeat,
    setPasswordRepeat,
}) => {
    return (
        <>
            <Input
                labelText="Ваш логин"
                name="login"
                placeholder="Имя"
                className={styles.input}

                onChange={e => setName(e.currentTarget.value)}
                type="text"
                value={name}
            />
            <Input
                labelText="Ваш пароль"
                name="password"
                placeholder="Пароль"
                className={styles.input}

                onChange={e => setPassword(e.currentTarget.value)}
                type="password"
                value={password}
            />
            <Input
                labelText="Повторите пароль"
                name="passwordRepeat"
                placeholder="Повтор"
                className={styles.input}

                onChange={e => setPasswordRepeat(e.currentTarget.value)}
                type="password"
                value={passwordRepeat}
            />
        </>
    );
};

export default Imports;
