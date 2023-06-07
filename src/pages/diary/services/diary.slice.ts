import { createSlice } from "@reduxjs/toolkit";
import { DiaryProps } from "../../../types";

interface DiaryState {
  diary: DiaryProps;
  setNavTitle: string;
}

const initialState: DiaryState = {
  diary: {
    userInfo: {
      profileImage: "",
      nickName: "",
      comment: "",
    },
    title: "",
    departure: "",
    destination: "",
    departureDate: "",
    arrivalDate: "",
    thumnailImage: "",
    contents: "",
    bookmark: false,
    public: false,
  },
  setNavTitle: "내 일기",
};

export const DiarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    setDiaryList: (state, action) => {
      state.diary = action.payload;
    },
    setNavTitle: (state, action) => {
      state.diary = action.payload;
    },
  },
});

export const { setDiaryList, setNavTitle } = DiarySlice.actions;
export default DiarySlice.reducer;
