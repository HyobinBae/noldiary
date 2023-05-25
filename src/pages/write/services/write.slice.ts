import { createSlice } from "@reduxjs/toolkit";
import { WriteProps } from "../../../types";

interface WriteState {
  diary: WriteProps;
  imageUrl: string;
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
  imageUrl: "",
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
  },
});

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
