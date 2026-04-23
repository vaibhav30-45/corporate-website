import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createEnquiry } from "../../services/enquiryService";

export const submitEnquiry = createAsyncThunk(
  "enquiry/submit",
  async (data, { rejectWithValue }) => {
    try {
      return await createEnquiry(data);
    } catch (err) {
      return rejectWithValue(err.error || "Failed to submit enquiry");
    }
  }
);

const enquirySlice = createSlice({
  name: "enquiry",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    resetState: (state) => {
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitEnquiry.pending, (state) => {
        state.loading = true;
      })
      .addCase(submitEnquiry.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitEnquiry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetState } = enquirySlice.actions;
export default enquirySlice.reducer;