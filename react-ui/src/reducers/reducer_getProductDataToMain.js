import { GET_PRODUCT_DATA, GET_PRODUCT_DATA_BEGIN, GET_PRODUCT_DATA_SUCCESS, GET_PRODUCT_DATA_FAILURE } from "../constants/constants";

const initialState = {
    productItemMainPage: []
}

const getProductDataToMain = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        // case GET_PRODUCT_DATA_BEGIN:
        //     return { ...state };
        case GET_PRODUCT_DATA_SUCCESS:
            return {
                ...state,
                ...payload,
            }
        default:
            return state;
    }
};

export default getProductDataToMain;