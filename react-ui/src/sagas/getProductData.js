import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_PRODUCT_DATA, GET_PRODUCT_DATA_BEGIN, GET_PRODUCT_DATA_SUCCESS, GET_PRODUCT_DATA_FAILURE } from "../constants/constants";

export function* createRequest(action) {
    try {
        let location = action.payload.location;
        console.log('===CATEGORY===',action.payload.location)
        yield put({ type: GET_PRODUCT_DATA_BEGIN  });
        let response = yield call(fetch, `/apiFind/${location}`);
        const productItemMainPage = yield call([response, response.json]);
        yield put({
            type: GET_PRODUCT_DATA_SUCCESS, payload: {
                productItemMainPage: productItemMainPage,
            }
        });
    } catch (error) {
        console.log('createRequest error', error);
        yield put({ type: GET_PRODUCT_DATA_FAILURE  });
    }
}
export default function* getProductData() {
    yield takeEvery(GET_PRODUCT_DATA, createRequest);
}