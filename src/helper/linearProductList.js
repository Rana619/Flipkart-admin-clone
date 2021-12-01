function linearProductList(products, options = []) {

    for (let product of products) {
        options.push({ 
            value: product._id, 
            name: product.name, 
         });
    }
    return options;
}

export default linearProductList;