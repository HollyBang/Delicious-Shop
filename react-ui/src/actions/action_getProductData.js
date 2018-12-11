import { GET_PRODUCT_DATA  } from "../constants/constants";

export function getProductData(category){
    return{
        type: GET_PRODUCT_DATA,
        payload: {
            category:category
        }
    }
}