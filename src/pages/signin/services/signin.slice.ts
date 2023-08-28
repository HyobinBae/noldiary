import { createSlice } from "@reduxjs/toolkit";

export interface SigninState {
  accessToken: string;
}

const initialState: SigninState = {
  accessToken: "",
};

export const SigninSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});

export const { setAccessToken } = SigninSlice.actions;
export default SigninSlice.reducer;
