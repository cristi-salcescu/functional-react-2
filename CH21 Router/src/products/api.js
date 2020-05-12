const baseUrl = "http://localhost:3000";

function toJson(response){
    return response.json();
}

function fetchProducts(){
    return fetch(`${baseUrl}/fruits/`)
        .then(toJson)
}

function fetchProduct(id){
    return fetch(`${baseUrl}/fruits/${id}`)
        .then(toJson)
}

export default { fetchProducts, fetchProduct };