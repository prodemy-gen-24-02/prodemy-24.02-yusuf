const initialState = {
    cart: [],
};

const cartReducer = (state = initialState, action) => {
    let updatedItems;

    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case "REMOVE_FROM_CART":
            updatedItems = state.cart.filter(
                (item) => item.id !== action.payload.id
            );
            return {
                ...state,
                cart: updatedItems,
            };
        case "CLEAR_CART":
            return {
                cart: [],
            };
        default:
            return state;
    }
};

export default cartReducer;
