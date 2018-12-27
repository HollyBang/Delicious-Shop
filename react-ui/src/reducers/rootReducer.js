import { combineReducers } from 'redux';
// import test from './reducer_test';
// import imgUpload from './imgUpload';
// import test2 from './reducer_test2';
import getProductData from './reducer_getProductData';
import getFullProductItem from './reducer_getFullProductItem';

const rootReducer = combineReducers({
    getProductData,
    getFullProductItem
})
export default rootReducer;