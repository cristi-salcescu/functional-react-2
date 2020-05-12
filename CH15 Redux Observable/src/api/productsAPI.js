import { ajax } from 'rxjs/ajax';

const baseUrl = 'http://localhost:3000';

function fetchProducts(){
    return ajax.getJSON(`${baseUrl}/fruits/`)
}

export default { fetchProducts };