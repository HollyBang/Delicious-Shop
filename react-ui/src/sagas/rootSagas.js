import { all } from 'redux-saga/effects';
import getProductDataToMain from './getProductDataToMain';
import watchUploadRequest from './watchUploadRequest.js';


export default function* rootSaga() {
    yield all([
        // watchUploadRequest(),
        getProductDataToMain(),
    ])
}