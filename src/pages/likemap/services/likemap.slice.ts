import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../services/store";

interface LikeMapState {
  mapXY: {
    mapx: number;
    mapy: number;
  };
}

const initialState: LikeMapState = {
  mapXY: {
    mapx: 0,
    mapy: 0,
  },
};

export const LikeMapSlice = createSlice({
  name: "likemap",
  initialState,
  reducers: {
    setSelectedMapX: (state, action) => {
      state.mapXY.mapx = action.payload;
    },
    setSelectedMapY: (state, action) => {
      state.mapXY.mapy = action.payload;
    },
  },
});

export const { setSelectedMapX, setSelectedMapY } = LikeMapSlice.actions;
export default LikeMapSlice.reducer;
