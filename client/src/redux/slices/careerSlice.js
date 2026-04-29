import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:5000/api/career";

// ✅ GET JOBS
export const fetchJobs = createAsyncThunk(
  "career/fetchJobs",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(API);
      return res.data;
    } catch (err) {
      return rejectWithValue("Failed to fetch jobs");
    }
  }
);

// ✅ APPLY JOB
export const applyJob = createAsyncThunk(
  "career/applyJob",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${API}/apply`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.error || "Application failed"
      );
    }
  }
);

const careerSlice = createSlice({
  name: "career",
  initialState: {
    jobs: [],
    filteredJobs: [],
    loading: false,
    error: null,

    filters: {
      location: "",
      department: "",
      type: "",
    },

    currentPage: 1,
    jobsPerPage: 3,
  },

  reducers: {
    setFilter: (state, action) => {
      const { key, value } = action.payload;
      state.filters[key] = value;

      state.filteredJobs = state.jobs.filter((job) => {
        return (
          (!state.filters.location ||
            job.location === state.filters.location) &&
          (!state.filters.department ||
            job.department === state.filters.department) &&
          (!state.filters.type || job.type === state.filters.type)
        );
      });

      state.currentPage = 1;
    },

    clearFilter: (state) => {
      state.filters = {
        location: "",
        department: "",
        type: "",
      };

      state.filteredJobs = state.jobs;
      state.currentPage = 1;
    },

    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      // 🔹 FETCH JOBS
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
        state.filteredJobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // 🔹 APPLY JOB
      .addCase(applyJob.pending, (state) => {
        state.loading = true;
      })
      .addCase(applyJob.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(applyJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilter, clearFilter, setPage } = careerSlice.actions;
export default careerSlice.reducer;


