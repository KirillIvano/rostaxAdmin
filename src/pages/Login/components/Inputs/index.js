import React from 'react';
import {
    Input,
} from '@/components';

const Imports = ({
    password,
    setPassword,
    name,
    setName,
}) => {
    return (
        <>
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
        </>
    );
};

export default Imports;
