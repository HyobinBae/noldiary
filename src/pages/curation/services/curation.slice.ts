import { createSlice } from "@reduxjs/toolkit";

interface CurationState {
  courseCode: string;
  contentID: string;
  setKeyword: string;
  courseTitle: string;
}

const initialState: CurationState = {
  courseCode: "",
  contentID: "",
  setKeyword: "",
  courseTitle: "",
};

export const CurationSlice = createSlice({
  name: "curation",
  initialState,
  reducers: {
    setCourseCode: (state, action) => {
      state.courseCode = action.payload;
    },
    setContentID: (state, action) => {
      state.courseCode = action.payload;
    },
    setKeyword: (state, action) => {
      state.setKeyword = action.payload;
    },
    setCourseTitle: (state, action) => {
      state.courseTitle = action.payload;
    },
  },
});

export const { setCourseCode, setContentID, setKeyword, setCourseTitle } =
  CurationSlice.actions;
export default CurationSlice.reducer;
