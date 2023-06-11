import { createSlice } from "@reduxjs/toolkit";
import { GetPresignedUrl, ImageUrl, WriteProps } from "../../../types";
import { getPresignedUrl } from "../../../services/api";
import { RootState } from "../../../services/store";

interface WriteState {
  diary: WriteProps;
  imageUrl: ImageUrl;
  presignedUrl: GetPresignedUrl;
  isModalOpen: boolean;
}

const initialState: WriteState = {
  diary: {
    title: "",
    departure: "",
    destination: "",
    departureDate: new Date(),
    arrivalDate: new Date(),
    contents: "",
    bookmark: false,
    isPublic: false,
  },
  imageUrl: {
    url: "",
  },
  presignedUrl: {
    url: "",
    fileName: "",
  },
  isModalOpen: false,
};

export const WriteSlice = createSlice({
  name: "write",
  initialState,
  reducers: {
    setDiary: (state, action) => {
      state.diary = action.payload;
    },
    setImageUrl: (state, action) => {
      state.imageUrl = action.payload;
    },
    setTitle: (state, action) => {
      state.diary.title = action.payload;
    },
    setDeparture: (state, action) => {
      state.diary.departure = action.payload;
    },
    setDestination: (state, action) => {
      state.diary.destination = action.payload;
    },
    setDepartureDate: (state, action) => {
      state.diary.departureDate = action.payload;
    },
    setArrivalDate: (state, action) => {
      state.diary.arrivalDate = action.payload;
    },
    setWriteContents: (state, action) => {
      state.diary.contents = action.payload;
    },
    setPresignedUrl: (state, action) => {
      state.presignedUrl = action.payload;
    },
    setBookmark: (state, action) => {
      state.diary.bookmark = action.payload;
    },
    setIsPublic: (state, action) => {
      state.diary.isPublic = action.payload;
    },
    setIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(getPresignedUrl.matchFulfilled, (state, { payload }) => {
      state.presignedUrl = payload;
    });
  },
});

export const selectPresignedUrl = (state: RootState) =>
  state.write.presignedUrl;

export const selectImageUrl = (state: RootState) => state.write.imageUrl;

export const {
  setDiary,
  setImageUrl,
  setTitle,
  setDeparture,
  setDestination,
  setDepartureDate,
  setArrivalDate,
  setWriteContents,
  setBookmark,
  setIsPublic,
  setIsModalOpen,
} = WriteSlice.actions;
export default WriteSlice.reducer;
