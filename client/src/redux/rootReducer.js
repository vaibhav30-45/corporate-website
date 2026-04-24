import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../redux/slices/authSlice';
import enquiryReducer from '../redux/slices/enquirySlice';
import governanceReducer from '../redux/slices/governanceSlice';
import careerReducer from '../redux/slices/careerSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    enquiry: enquiryReducer,
    governance: governanceReducer,
    career: careerReducer,
});

export default rootReducer;