import { createStore, combineReducers } from "redux";
import cartReducer from "./reducer/cartReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
});

const store = createStore(rootReducer);

store.subscribe(() => {
    console.log("store change : ", store.getState());
});

export default store;
