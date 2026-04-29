import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../redux/slices/authSlice';
import enquiryReducer from '../redux/slices/enquirySlice';
import governanceReducer from '../redux/slices/governanceSlice';
import careerReducer from '../redux/slices/careerSlice';
import adminEnquiryReducer from '../redux/slices/enquiryAdminSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    enquiry: enquiryReducer,
    governance: governanceReducer,
    career: careerReducer,
    adminEnquiry: adminEnquiryReducer,
});

export default rootReducer;