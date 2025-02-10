import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { User } from "@/types/globalTypes";

interface AuthState {
  user: User | null;
  token: string | null;
}


const initialState: AuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      console.log("form authSlice", user, token);
      state.user = user;
      state.token = token;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState): User | null =>
  state?.auth?.user;
