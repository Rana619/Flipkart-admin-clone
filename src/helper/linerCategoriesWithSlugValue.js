function linearCategoriesWithSlugValue(categories, options = []) {

    for (let category of categories) {
        options.push({ 
            value: category.slug, 
            name: category.name, 
            parentId: category.parentId,
            type : category.type
         });
        if (category.children.length > 0) {
            linearCategoriesWithSlugValue(category.children, options);
        }
    }
    return options;
}

export default linearCategoriesWithSlugValue;