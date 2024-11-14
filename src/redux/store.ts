import { configureStore } from "@reduxjs/toolkit";
import  productosReducer  from "./productosSlice";
import cartReducer from "./slice/CartSlice";

const store = configureStore({
    reducer: {
        productos: productosReducer,
        cart: cartReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;