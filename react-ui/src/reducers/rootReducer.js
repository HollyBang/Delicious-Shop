import { combineReducers } from 'redux';
// import test from './reducer_test';
// import imgUpload from './imgUpload';
// import test2 from './reducer_test2';
import getProductData from './reducer_getProductData'

const rootReducer = combineReducers({
    getProductData
})
export default rootReducer;