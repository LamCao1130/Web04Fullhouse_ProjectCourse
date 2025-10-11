import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const urlApi = "https://njftr6-8096.csb.app/lessons";

export const fetchAllCourse = createAsyncThunk(
  "course/getAllCourses",
  async () => {
    let res = await axios.get(urlApi);
    return res.data;
  }
);

let courses = { coursesList: [], loading: false, error: null };

let courseSlice = createSlice({
  name: "course",
  initialState: courses,
  extraReducers(builder) {
    builder
      .addCase(fetchAllCourse.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllCourse.fulfilled, (state, action) => {
        state.loading = false;
        console.log(123);
        state.coursesList = action.payload;
      })
      .addCase(fetchAllCourse.rejected, (state, action) => {
        state.error = action.error || "lỗi";
        state.loading = true;
      });
  },
});
export default courseSlice.reducer;
