import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  email: string;
  id: number;
  name: string;
  token: string;
}

const INITIAL_STATE: User = { email: "", id: null, name: "", token: "" };

const loggedUserSlice = createSlice({
  name: "loggedUser",
  initialState: INITIAL_STATE,
  reducers: {
    setLoggedUser(state, { payload }: PayloadAction<User>) {
      return payload;
    },
  },
});

export default loggedUserSlice.reducer;
export const { setLoggedUser } = loggedUserSlice.actions;
export const useLoggedUser = (state: any) => {
  return state.loggedUser as User;
};
