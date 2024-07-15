import { createSlice } from "@reduxjs/toolkit";

interface User {
  name: string;
  email: string;
}

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: {
    name: "Bruno de Andrade",
    email: "email.bruno@email.com",
  },
};

export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    // Primeira action: login
    login: (state, action) => {
      state.user = action.payload;
    },
    // Segunda action: logout
    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const { login, logout} = userSlice.actions
