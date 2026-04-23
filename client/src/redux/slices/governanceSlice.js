import { createSlice } from "@reduxjs/toolkit";
import {
  boardMembers,
  esgData,
  policies,
} from "../../modules/public/pages/governance/data/governanceData";

const governanceSlice = createSlice({
  name: "governance",
  initialState: {
    boardMembers,
    esgData,
    policies,
  },
  reducers: {},
});

export default governanceSlice.reducer;