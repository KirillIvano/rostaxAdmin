export const normalizeProducts = products =>
    products.reduce(
        (acc, product) => {
            const {id} = product;
            acc.categories[id] = product;

            acc.categoriesIds.push(id);

            return acc;
        },
        {
            categories: {},
            categoriesIds: [],
        },
    );
