import { GET_FULLPRODUCTITEM_DATA, GET_FULLPRODUCTITEM_DATA_BEGIN, GET_FULLPRODUCTITEM_DATA_SUCCESS, GET_FULLPRODUCTITEM_DATA_FAILURE } from "../constants/constants";

const initialState = {
    fullProductItemData: {}
}

const getFullProductItem = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        // case GET_FULLPRODUCTITEM_DATA_BEGIN:
        //     return { ...state };
        case GET_FULLPRODUCTITEM_DATA_SUCCESS:
            return {
                ...state,
                ...payload,
            }
        default:
            return state;
    }
};

export default getFullProductItem;