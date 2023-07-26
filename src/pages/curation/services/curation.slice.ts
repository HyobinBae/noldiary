import { createSlice } from "@reduxjs/toolkit";

interface CurationState {
  courseCode: string;
  contentID: string;
  setKeyword: string;
  courseTitle: string;
  pageNo: number;
  totalCount: number;
}

const initialState: CurationState = {
  courseCode: "",
  contentID: "",
  setKeyword: "",
  courseTitle: "가족코스",
  pageNo: 1,
  totalCount: 0,
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
    setPageNo: (state, action) => {
      state.pageNo = action.payload;
    },
    setTotalCount: (state, action) => {
      state.totalCount = action.payload;
    },
  },
});

export const {
  setCourseCode,
  setContentID,
  setKeyword,
  setCourseTitle,
  setPageNo,
  setTotalCount,
} = CurationSlice.actions;
export default CurationSlice.reducer;
