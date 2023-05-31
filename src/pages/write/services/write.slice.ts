import { createSlice } from "@reduxjs/toolkit";
import { GetPresignedUrl, ImageUrl, WriteProps } from "../../../types";
import { RootState } from "../../../services/store";
import { getPresignedUrl, uploadImage } from "../../../services/api";

interface WriteState {
  diary: WriteProps;
  imageUrl: ImageUrl;
  presignedUrl: GetPresignedUrl;
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
    public: false,
  },
  imageUrl: {
    url: "",
  },
  presignedUrl: {
    url: "",
  },
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
  },
  extraReducers: (builder) => {
    builder.addMatcher(getPresignedUrl.matchFulfilled, (state, { payload }) => {
      state.presignedUrl = payload;
    });
    builder.addMatcher(uploadImage.matchFulfilled, (state, { payload }) => {
      state.imageUrl = payload;
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
} = WriteSlice.actions;
export default WriteSlice.reducer;
