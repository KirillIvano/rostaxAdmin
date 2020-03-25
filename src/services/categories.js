// @flow

import type {CategoryFormData, Category} from '@/entities/category/types';

declare var SERVER_ORIGIN: string;

type getCategoriesResponseType = {ok: boolean, categories: Category[]} | {error: string};

export const getCategories = (accessToken: string): Promise<getCategoriesResponseType> => fetch(
    `${SERVER_ORIGIN}/admin/categories/previews`,
    {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
    }).then(res => res.json());

export const deleteCategory = (accessToken: string, categoryId: string) => fetch(
    `${SERVER_ORIGIN}/admin/categories/${categoryId}`,
    {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
    }).then(res => res.json());

export const createCategory = (accessToken: string, body: CategoryFormData) => fetch(
    `${SERVER_ORIGIN}/admin/categories`,
    {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
        body,
    }).then(res => res.json());

export const updateCategory = (
    accessToken: string,
    categoryId: string,
    body: CategoryFormData,
) => fetch(
    `${SERVER_ORIGIN}/admin/categories/${categoryId}`,
    {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
        body,
    }).then(res => res.json());
