import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_FULLPRODUCTITEM_DATA, GET_FULLPRODUCTITEM_DATA_BEGIN, GET_FULLPRODUCTITEM_DATA_SUCCESS, GET_FULLPRODUCTITEM_DATA_FAILURE } from "../constants/constants";

export function* createRequest(action) {
console.log('action GET_FULLPRODUCTITEM_DATA action',action)
    try {
            const { productId } = action.payload;
            yield put({ type: GET_FULLPRODUCTITEM_DATA_BEGIN });
            let response = yield call(fetch, `/apiFind/findFullItem/${productId}`);
            const fullProductItemData = yield call([response, response.json]);
            console.log(fullProductItemData)
            yield put({
                type: GET_FULLPRODUCTITEM_DATA_SUCCESS, payload: {
                    fullProductItemData,
                }
            });
        

    } catch (error) {
        console.log('createRequest error', error);
        yield put({ type: GET_FULLPRODUCTITEM_DATA_FAILURE });
    }
}
export default function* getProductData() {
    yield takeEvery(GET_FULLPRODUCTITEM_DATA, createRequest);
}