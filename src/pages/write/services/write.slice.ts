import { createSlice } from "@reduxjs/toolkit";
import { WriteProps } from "../../../types";
import { RootState } from "../../../services/store";

interface WriteState {
  combineWriteContents: WriteProps[];
  getImageUrl: string;
  title: string;
  departure: string;
  destination: string;
  departureDate: string;
  arrivalDate: string;
  writeContents: string;
}

const initialState: WriteState = {
  combineWriteContents: [],
  getImageUrl: "",
  title: "",
  departure: "",
  destination: "",
  departureDate: "",
  arrivalDate: "",
  writeContents: "",
};

export const WriteSlice = createSlice({
  name: "write",
  initialState,
  reducers: {
    setImageUrl: (state, action) => {
      state.getImageUrl = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setDeparture: (state, action) => {
      state.departure = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setDepartureDate: (state, action) => {
      state.departureDate = action.payload;
    },
    setArrivalDate: (state, action) => {
      state.arrivalDate = action.payload;
    },
    setWriteContents: (state, action) => {
      state.writeContents = action.payload;
    },
  },
});

export const {
  setImageUrl,
  setTitle,
  setDeparture,
  setDestination,
  setDepartureDate,
  setArrivalDate,
  setWriteContents,
} = WriteSlice.actions;
export default WriteSlice.reducer;
export const selectWriteContents = (state: RootState) =>
  state.write.writeContents;
