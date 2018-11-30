import { call, put, takeEvery } from 'redux-saga/effects';

export function* createRequest() {
    try {
        yield put({ type: "GET_PRODUCT_DATA_TO_MAIN_BEGIN" });
        let response = yield call(fetch, `/apiFind`);
        const productItemMainPage = yield call([response, response.json]);
        yield put({
            type: "GET_PRODUCT_DATA_TO_MAIN_SUCCESS", payload: {
                productItemMainPage: productItemMainPage,
            }
        });
    } catch (error) {
        console.log('createRequest error', error);
    }
}
export default function* getProductDataToMain() {
    yield takeEvery("GET_PRODUCT_DATA_TO_MAIN", createRequest);
}