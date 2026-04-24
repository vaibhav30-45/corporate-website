// import { createSlice } from "@reduxjs/toolkit";
// import jobsData from "../../modules/public/pages/careers/data/jobsData";

// const careerSlice = createSlice({
//   name: "career",
//   initialState: {
//     jobs: jobsData,
//     filteredJobs: jobsData,

//     filters: {
//       location: "",
//       department: "",
//       type: "",
//     },
//   },

//   reducers: {
//     setFilter: (state, action) => {
//       const { key, value } = action.payload;

//       state.filters[key] = value;

//       state.filteredJobs = state.jobs.filter((job) => {
//         return (
//           (!state.filters.location || job.location === state.filters.location) &&
//           (!state.filters.department || job.department === state.filters.department) &&
//           (!state.filters.type || job.type === state.filters.type)
//         );
//       });
//     },

//     clearFilter: (state) => {
//       state.filters = {
//         location: "",
//         department: "",
//         type: "",
//       };
//       state.filteredJobs = state.jobs;
//     },
//   },
// });

// export const { setFilter, clearFilter } = careerSlice.actions;
// export default careerSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import jobsData from "../../modules/public/pages/careers/data/jobsData";

const careerSlice = createSlice({
  name: "career",
  initialState: {
    jobs: jobsData,
    filteredJobs: jobsData,

    filters: {
      location: "",
      department: "",
      type: "",
    },

    // ✅ ADD THIS BACK
    currentPage: 1,
    jobsPerPage: 3,
  },

  reducers: {
    setFilter: (state, action) => {
      const { key, value } = action.payload;

      state.filters[key] = value;

      state.filteredJobs = state.jobs.filter((job) => {
        return (
          (!state.filters.location || job.location === state.filters.location) &&
          (!state.filters.department || job.department === state.filters.department) &&
          (!state.filters.type || job.type === state.filters.type)
        );
      });

      // ✅ RESET PAGE AFTER FILTER
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

    // ✅ THIS WAS MISSING
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setFilter, clearFilter, setPage } = careerSlice.actions;
export default careerSlice.reducer;