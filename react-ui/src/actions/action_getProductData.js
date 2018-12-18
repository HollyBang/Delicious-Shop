import { GET_PRODUCT_DATA  } from "../constants/constants";

export function getProductData(location){
    return{
        type: GET_PRODUCT_DATA,
        payload: {
            location:location
        }
    }
}