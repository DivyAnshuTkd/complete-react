import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;           
            state.userData = action.payload.userData;
        },

        logout: (state, action) => {
            state.status = false;
            state.userData = null;
        }
    }
})

export const {login, logout} = authSlice.actions;               // methods in reducer are called actions. Here acitons are login, logout. We export them to use in our components.

export default authSlice.reducer;