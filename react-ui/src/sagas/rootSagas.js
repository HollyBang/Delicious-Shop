import { all } from 'redux-saga/effects';
import getProductData from './getProductData';
import watchUploadRequest from './watchUploadRequest.js';


export default function* rootSaga() {
    yield all([
        // watchUploadRequest(),
        getProductData(),
    ])
}