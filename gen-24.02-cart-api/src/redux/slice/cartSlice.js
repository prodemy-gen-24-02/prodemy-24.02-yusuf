/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    loading: false,
    error: null,
};

export const fetchCartData = createAsyncThunk(
    "cart/fetchCartData",
    async (_, { getState }) => {
        const response = await axios.get(import.meta.env.VITE_API_URL + "cart");
        return response.data;
    }
);

// async function getDbCart() {
//     const res = await axios.get(import.meta.env.VITE_API_URL + "cart");
//     const user = JSON.parse(localStorage.getItem("user"));
//     // console.log(user);
//     // console.log(res.data);

//     if (res.data.length > 0) {
//         const cartData = res.data.filter((item) => item.userId === user.id);

//         // console.log(cartData);

//         return { data: cartData };
//     }
//     return { ...initialState };
//     // return { ...initialState };
// }

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log(import.meta.env.VITE_API_URL + "cart");
            const itemInCart = state.data.find(
                (item) => item.id === action.payload.id
            );
            if (itemInCart) {
                if (itemInCart.image !== action.payload.image) {
                    axios.post(
                        axios.post(
                            import.meta.env.VITE_API_URL + "cart",
                            action.payload
                        )
                    );
                } else {
                    itemInCart.qty += 1;
                    axios.put(
                        import.meta.env.VITE_API_URL + `cart/${itemInCart.id}`,
                        itemInCart
                    );
                }
            } else {
                state.data.push(action.payload);
                axios.post(
                    import.meta.env.VITE_API_URL + "cart",
                    action.payload
                );
            }
        },
        deleteCart: (state) => {
            for (let data of state.data) {
                axios.delete(import.meta.env.VITE_API_URL + `cart/${data.id}`);
            }
            state.data.splice(0, state.data.length);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCartData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchCartData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { addToCart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
