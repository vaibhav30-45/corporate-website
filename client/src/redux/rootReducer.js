import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../redux/slices/authSlice';
import enquiryReducer from '../redux/slices/enquirySlice';
import governanceReducer from '../redux/slices/governanceSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    enquiry: enquiryReducer,
    governance: governanceReducer,
});

export default rootReducer;