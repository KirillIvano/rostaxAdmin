export const normalizeProducts = products =>
    products.reduce(
        (acc, product) => {
            const {id} = product;
            acc.products[id] = product;

            acc.productIds.push(id);

            return acc;
        },
        {
            products: {},
            productIds: [],
        },
    );
