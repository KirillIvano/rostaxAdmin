// @flow

import type {UserCreds} from '@/entities/auth/types';

declare var SERVER_ORIGIN: string;

export const refreshTokens = (body: UserCreds) => fetch(
    `${SERVER_ORIGIN}/admin/auth/refreshTokens`,
    {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    },
).then(response => response.json());

export const saveToken = (refreshJwt: string) => {
    localStorage.setItem('refreshJwt', refreshJwt);
};

export const getLocalToken = () => localStorage.getItem('refreshJwt');

export const login = (body: UserCreds) => fetch(
    `${SERVER_ORIGIN}/admin/auth/login`,
    {
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        credentials: 'include',
    }).then(response => response.json());

export const register = (userHash: string, body: UserCreds) => fetch(
    `${SERVER_ORIGIN}/admin/auth/register/${userHash}`,
    {
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        credentials: 'include',
    }).then(response => response.json());

