export const getProducts = (accessToken, categoryId) => fetch(
    `${SERVER_ORIGIN}/admin/products/${categoryId}`,
    {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
    }).then(res => res.json());

export const deleteProduct = (accessToken, categoryId, productId) => fetch(
    `${SERVER_ORIGIN}/admin/products/${categoryId}/${productId}`,
    {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
    }).then(res => res.json());

export const createProduct = (accessToken, categoryId, body) => fetch(
    `${SERVER_ORIGIN}/admin/products/${categoryId}`,
    {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
        body,
    }).then(res => res.json());

export const updateProduct = (
    accessToken,
    categoryId,
    body,
) => fetch(
    `${SERVER_ORIGIN}/admin/categories/${categoryId}`,
    {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
        body,
    }).then(res => res.json());
