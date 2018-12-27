import { GET_FULLPRODUCTITEM_DATA   } from "../constants/constants";

export default function getFullProductItem(productId){
    console.log('productId ACTION', productId);
    return{
        type: GET_FULLPRODUCTITEM_DATA,
        payload: {
            productId,
        }
    }
}