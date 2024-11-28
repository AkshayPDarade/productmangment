import axios from "axios";

const API_URL="http://localhost:4004/product";

class ProductServices{
saveProduct(product){
    return axios.post(API_URL+"/saveProduct",product);
}

getallProduct(){
    return axios.get(API_URL+"/getAllProduct");
}

getallProductById(id){
    return axios.get(API_URL+"/getProductById/"+id);
}

deleteProduct(id){
    return axios.delete(API_URL+"/deleteProduct/" + id);

}
editProduct(product){
    return axios.put(API_URL+"/editProduct/"+product.id , product);
}
}

export default new ProductServices;