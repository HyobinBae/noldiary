import { createSlice } from "@reduxjs/toolkit";

interface CurationState {
  courseCode: string;
  contentTypeID: number;
  contentID: number;
  setKeyword: string;
  courseTitle: string;
  pageNo: number;
  totalCount: number;
  heart: boolean;
  detailNavIndex: number;
}

const initialState: CurationState = {
  courseCode: "",
  contentTypeID: 0,
  contentID: 0,
  setKeyword: "",
  courseTitle: "가족코스",
  pageNo: 1,
  totalCount: 0,
  heart: false,
  detailNavIndex: 0,
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
    setContentTypeID: (state, action) => {
      state.contentTypeID = action.payload;
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
    setHeart: (state, action) => {
      state.heart = action.payload;
    },
    setDetailNavIndex: (state, action) => {
      state.detailNavIndex = action.payload;
    },
  },
});

export const {
  setCourseCode,
  setContentID,
  setContentTypeID,
  setKeyword,
  setCourseTitle,
  setPageNo,
  setTotalCount,
  setHeart,
  setDetailNavIndex,
} = CurationSlice.actions;
export default CurationSlice.reducer;
