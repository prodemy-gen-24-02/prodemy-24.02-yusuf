import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { fetchCartData } from "./slice/cartSlice";
import authReducer from "./slice/authSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: authReducer,
    },
});

store.dispatch(fetchCartData());

store.subscribe(() => {
    console.log("STORE CHANGE : ", store.getState());
});

export default store;
