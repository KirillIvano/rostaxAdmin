import {normalize, schema} from 'normalizr';

export const normalizeCategoriesPreviews = categories =>
    categories.reduce(
        (acc, category) => {
            const {id} = category;
            acc[id] = category;
            return acc;
        },
        {},
    );

const productSchema = new schema.Entity('product');

const categorySchema = new schema.Entity(
    'category',
    {
        products: [productSchema],
    },
);

export const normalizeCategory = category => normalize(category, categorySchema);
