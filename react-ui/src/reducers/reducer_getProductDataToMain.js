const initialState = {
    productItemMainPage: []
}

const getProductDataToMain = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "GET_PRODUCT_DATA_TO_MAIN_BEGIN":
            return { ...state };
        case "GET_PRODUCT_DATA_TO_MAIN_SUCCESS":
            return {
                ...state,
                ...payload,
            }
        default:
            return state;
    }
};

export default getProductDataToMain;