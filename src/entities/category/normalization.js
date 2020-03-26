export const normalizeCategories = categories =>
    categories.reduce(
        (acc, category) => {
            const {id} = category;
            acc[id] = category;
            return acc;
        },
        {},
    );
