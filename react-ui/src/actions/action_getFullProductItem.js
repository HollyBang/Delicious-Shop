import { GET_FULLPRODUCTITEM_DATA   } from "../constants/constants";

export default function getProductData(productId){
    console.log('productId ACTION', productId);
    return{
        type: GET_FULLPRODUCTITEM_DATA,
        payload: {
            productId,
        }
    }
}