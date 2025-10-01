import React from "react";
import courseSlice from "../counter/CourseSlice";
import { configureStore } from "@reduxjs/toolkit";

let store = configureStore({
  reducer: {
    courses: courseSlice,
  },
});
export default store;
