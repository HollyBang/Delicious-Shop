import { combineReducers } from 'redux';
// import test from './reducer_test';
// import imgUpload from './imgUpload';
// import test2 from './reducer_test2';
import getProductDataToMain from './reducer_getProductDataToMain'

const rootReducer = combineReducers({
    getProductDataToMain
})
export default rootReducer;