import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../redux/slices/authSlice';
import enquiryReducer from '../redux/slices/enquirySlice';

const rootReducer = combineReducers({
    auth: authReducer,
    enquiry: enquiryReducer, 
});

export default rootReducer;