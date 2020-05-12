function filterProducts({products, query}){
    return products.filter(isInQuery(query));
}

function isInQuery(query){
    return function(product){
        return product.name.includes(query.text); 
    };
}
  
export default {filterProducts}