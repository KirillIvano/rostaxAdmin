export const getCategories = accessToken => fetch(
    `${SERVER_ORIGIN}/admin/categories/previews`,
    {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
    }).then(res => res.json());

export const deleteCategory = (accessToken, categoryId) => fetch(
    `${SERVER_ORIGIN}/admin/categories/${categoryId}`,
    {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
    }).then(res => res.json());

export const createCategory = (accessToken, body) => fetch(
    `${SERVER_ORIGIN}/admin/categories`,
    {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
        body,
    }).then(res => res.json());

export const updateCategory = (accessToken, categoryId, body) => fetch(
    `${SERVER_ORIGIN}/admin/categories/${categoryId}`,
    {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
        body,
    }).then(res => res.json());
