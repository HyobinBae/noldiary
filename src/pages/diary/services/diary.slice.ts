import { createSlice } from "@reduxjs/toolkit";
import {
  getDiaryDetail,
  getDiaryList,
  getUserInfo,
} from "../../../services/api";
import { UserInfo, DiaryDetail, DiaryProps, UserSetting } from "../../../types";

interface DiaryState {
  getUserInfo: UserInfo;
  getDiaryList: DiaryProps[];
  getDiaryDetail: DiaryDetail;
  setNavTitle: string;
  userSetting: UserSetting;
  setFilterName: string;
  setSearchQuery: string;
}

const initialState: DiaryState = {
  getUserInfo: {
    name: "",
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
      thumbnailImage: "",
      contents: "",
      bookmark: false,
      isPublic: false,
      createdAt: "",
      updatedAt: "",
    },
  ],
  getDiaryDetail: {
    _id: "",
    author: "",
    title: "",
    departure: "",
    destination: "",
    departureDate: "",
    arrivalDate: "",
    thumbnailImage: "",
    contents: "",
    bookmark: false,
    isPublic: false,
    createdAt: "",
  },
  setNavTitle: "내 일기",
  userSetting: {
    profileImage: "",
    backgroundImage: "",
    nickname: "",
    message: "",
  },
  setFilterName: "최신순",
  setSearchQuery: "latest",
};

export const DiarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    setNavTitle: (state, action) => {
      state.setNavTitle = action.payload;
    },
    setProfileImage: (state, action) => {
      state.userSetting.profileImage = action.payload;
    },
    setBgImage: (state, action) => {
      state.userSetting.backgroundImage = action.payload;
    },
    setNickname: (state, action) => {
      state.userSetting.nickname = action.payload;
    },
    setMessage: (state, action) => {
      state.userSetting.message = action.payload;
    },
    setUserInfo: (state, action) => {
      state.getUserInfo = action.payload;
    },
    setFilterName: (state, action) => {
      state.setFilterName = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.setSearchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(getDiaryList.matchFulfilled, (state, { payload }) => {
      state.getDiaryList = payload;
    });
    builder.addMatcher(getUserInfo.matchFulfilled, (state, { payload }) => {
      state.getUserInfo = payload;
    });
    builder.addMatcher(getDiaryDetail.matchFulfilled, (state, { payload }) => {
      state.getDiaryDetail = payload;
    });
  },
});

export const {
  setNavTitle,
  setProfileImage,
  setBgImage,
  setNickname,
  setMessage,
  setUserInfo,
  setFilterName,
  setSearchQuery,
} = DiarySlice.actions;

export default DiarySlice.reducer;
