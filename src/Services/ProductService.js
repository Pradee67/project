import axios from 'axios';

const PRODUCT_API_BASE_URL = "https://localhost:44362/api/Products";

class ProductService {

    getProducts(){
        return axios.get(PRODUCT_API_BASE_URL);
    }

    createProduct(product){
        return axios.post(PRODUCT_API_BASE_URL, product);
    }

    getProductById(id){
        return axios.get(PRODUCT_API_BASE_URL + '/' + id);
    }

    updateProduct(product,id){
        return axios.put(PRODUCT_API_BASE_URL + '/' + id, product);
    }
        deleteProduct(id){
            return axios.delete(PRODUCT_API_BASE_URL + '/' + id);
        }
    }
    
    export default new ProductService()