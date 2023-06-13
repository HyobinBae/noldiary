import { createSlice } from "@reduxjs/toolkit";
import { DiaryProps } from "../../../types";
import { getDiaryList, getUserInfo } from "../../../services/api";
import { UserInfo } from "../../../types";

interface DiaryState {
  getUserInfo: UserInfo;
  getDiaryList: DiaryProps[];
  setNavTitle: string;
}

const initialState: DiaryState = {
  getUserInfo: {
    profileImage: "",
    backgroundImage: "",
    nickname: "",
    message: "",
    totalMyDiary: 0,
    totalSharedDiary: 0,
  },
  getDiaryList: [
    {
      _id: "",
      author: "",
      title: "",
      departure: "",
      destination: "",
      departureDate: "",
      arrivalDate: "",
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
    builder.addMatcher(getUserInfo.matchFulfilled, (state, { payload }) => {
      state.getUserInfo = payload;
    });
  },
});

export const { setNavTitle } = DiarySlice.actions;

export default DiarySlice.reducer;
