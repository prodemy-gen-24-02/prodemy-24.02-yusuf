import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    token: "",
    user: {
        id: "",
        email: "",
        name: "",
        role: "",
    },
};

function getStoredAuth() {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token) {
        // set header global
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        return {
            token,
            user: JSON.parse(user),
        };
    }

    return { ...initialState };
}

const authSlice = createSlice({
    name: "auth",
    initialState: getStoredAuth(),
    reducers: {
        setToken(state, action) {
            const token = action.payload;
            state.token = token;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        },
        setUser(state, action) {
            const { id, email, name, role } = action.payload;

            state.user.id = id;
            state.user.email = email;
            state.user.name = name;
            state.user.role = role;
            // console.log(state.user);
            localStorage.setItem(
                "user",
                JSON.stringify({ id, email, name, role })
            );
        },
        resetAuthData() {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            delete axios.defaults.headers.common["Authorization"];
            return { ...initialState };
        },
    },
});

export const { setToken, setUser, resetAuthData } = authSlice.actions;
export default authSlice.reducer;
