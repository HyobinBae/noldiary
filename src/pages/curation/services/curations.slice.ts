import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../services/store";

interface CurationState {
  courseCode: string;
}

const initialState: CurationState = {
  courseCode: "",
};

export const CurationSlice = createSlice({
  name: "curations",
  initialState,
  reducers: {
    setCourseCode: (state, action) => {
      state.courseCode = action.payload;
    },
  },
});

export const { setCourseCode } = CurationSlice.actions;
export default CurationSlice.reducer;
