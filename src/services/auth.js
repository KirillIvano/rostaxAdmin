export const refreshTokens = body => fetch(
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

export const saveToken = refreshJwt => {
    localStorage.setItem('jwt', refreshJwt);
};

export const login = body => fetch(
    `${SERVER_ORIGIN}/admin/auth/login`,
    {
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        credentials: 'include',
    }).then(response => response.json());

export const register = (userHash, body) => fetch(
    `${SERVER_ORIGIN}/admin/auth/register/${userHash}`,
    {
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        credentials: 'include',
    }).then(response => response.json());

