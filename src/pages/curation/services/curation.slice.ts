import { RootState } from "../../../services/store";
import { createSlice } from "@reduxjs/toolkit";
import { getSearchCuration } from "../../../services/api";
import { ContentsList } from "../../../types";

interface CurationState {
  courseCode: string;
  category: string;
  contentTypeID: number;
  contentID: number;
  keyword: string;
  courseTitle: string;
  pageNo: number;
  totalCount: number;
  isLike: boolean;
  detailNavIndex: number;
  searchCuration: ContentsList;
}

const initialState: CurationState = {
  courseCode: "",
  category: "",
  contentTypeID: 0,
  contentID: 0,
  keyword: "",
  courseTitle: "가족코스",
  pageNo: 1,
  totalCount: 0,
  isLike: false,
  detailNavIndex: 0,
  searchCuration: {
    content: [
      {
        contenttypeid: 0,
        contentid: 0,
        firstimage: "",
        title: "",
      },
    ],
    totalCount: 0,
  },
};

export const CurationSlice = createSlice({
  name: "curation",
  initialState,
  reducers: {
    setCourseCode: (state, action) => {
      state.courseCode = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setContentID: (state, action) => {
      state.courseCode = action.payload;
    },
    setContentTypeID: (state, action) => {
      state.contentTypeID = action.payload;
    },
    setKeyword: (state, action) => {
      state.keyword = action.payload;
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
    setLike: (state, action) => {
      state.isLike = action.payload;
    },
    setDetailNavIndex: (state, action) => {
      state.detailNavIndex = action.payload;
    },
    clearSearchCurationList: (state) => {
      state.searchCuration = {
        content: [
          {
            contenttypeid: 0,
            contentid: 0,
            firstimage: "",
            title: "",
          },
        ],
        totalCount: 0,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      getSearchCuration.matchFulfilled,
      (state, { payload }) => {
        state.searchCuration = payload;
      }
    );
  },
});

export const selectSearchCurationList = (state: RootState) =>
  state.curation.searchCuration;

export const {
  setCourseCode,
  setCategory,
  setContentID,
  setContentTypeID,
  setKeyword,
  setCourseTitle,
  setPageNo,
  setTotalCount,
  setLike,
  setDetailNavIndex,
  clearSearchCurationList,
} = CurationSlice.actions;
export default CurationSlice.reducer;
