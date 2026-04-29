import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllEnquiries,
  updateEnquiryStatus,
  deleteEnquiry
} from "../../services/enquiryService";

// GET ALL
export const fetchEnquiries = createAsyncThunk(
  "admin/enquiry/fetch",
  async (_, { rejectWithValue }) => {
    try {
      return await getAllEnquiries();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// UPDATE
export const markAsRead = createAsyncThunk(
  "admin/enquiry/update",
  async (id, { rejectWithValue }) => {
    try {
      return await updateEnquiryStatus(id, { status: "read" });
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// DELETE
export const removeEnquiry = createAsyncThunk(
  "admin/enquiry/delete",
  async (id, { rejectWithValue }) => {
    try {
      await deleteEnquiry(id);
      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const enquiryAdminSlice = createSlice({
  name: "adminEnquiry",
  initialState: {
    enquiries: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEnquiries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEnquiries.fulfilled, (state, action) => {
        state.loading = false;
        state.enquiries = action.payload;
      })
      .addCase(fetchEnquiries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(markAsRead.fulfilled, (state, action) => {
        const index = state.enquiries.findIndex(
          (e) => e._id === action.payload._id
        );
        if (index !== -1) state.enquiries[index] = action.payload;
      })

      .addCase(removeEnquiry.fulfilled, (state, action) => {
        state.enquiries = state.enquiries.filter(
          (e) => e._id !== action.payload
        );
      });
  }
});

export default enquiryAdminSlice.reducer;