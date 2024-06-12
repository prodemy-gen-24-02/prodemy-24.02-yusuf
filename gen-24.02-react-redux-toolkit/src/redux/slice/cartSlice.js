import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.data.find(
                (item) => item.id === action.payload.id
            );
            if (itemInCart) {
                itemInCart.qty += 1;
            } else {
                state.data.push(action.payload);
            }
        },
        deleteCart: (state) => {
            state.data.splice(0, state.data.length);
        },
    },
});

export const { addToCart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
