// @flow

export const getJwtPayload: (string => {exp: number, csrf: string}) =
     jwt => JSON.parse(atob(jwt.split('.')[1]));

export const isTokenExpired = (jwt: string) => {
    const {exp} = getJwtPayload(jwt);
    const present = Date.now() / 1000;

    return exp < present;
};
