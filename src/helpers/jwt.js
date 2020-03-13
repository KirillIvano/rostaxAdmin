export const getJwtPayload = jwt => JSON.parse(atob(jwt.split('.')[0]));
