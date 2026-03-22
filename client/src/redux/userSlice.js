import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        userData: null
    },
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload;
            if (action.payload && action.payload.token) {
                localStorage.setItem("token", action.payload.token);
            } else if (action.payload === null) {
                localStorage.removeItem("token");
            }
        }
    }
})

export const {setUserData} = userSlice.actions

export default userSlice.reducer