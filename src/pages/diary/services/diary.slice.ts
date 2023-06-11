import { createSlice } from "@reduxjs/toolkit";
import { DiaryProps } from "../../../types";
import { getDiaryList } from "../../../services/api";
import { RootState } from "../../../services/store";

interface DiaryState {
  getDiaryList: DiaryProps[];
  setNavTitle: string;
}

const initialState: DiaryState = {
  getDiaryList: [
    {
      _id: "",
      author: "",
      title: "",
      departure: "",
      destination: "",
      departureDate: new Date(),
      arrivalDate: new Date(),
      thumnailImage: "",
      contents: "",
      bookmark: false,
      isPublic: false,
      createdAt: "",
      updatedAt: "",
    },
  ],
  setNavTitle: "내 일기",
};

export const DiarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    setNavTitle: (state, action) => {
      state.setNavTitle = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(getDiaryList.matchFulfilled, (state, { payload }) => {
      state.getDiaryList = payload;
    });
  },
});

export const { setNavTitle } = DiarySlice.actions;
export const selectDiaryList = (state: RootState) => state.diary.getDiaryList;

export default DiarySlice.reducer;
