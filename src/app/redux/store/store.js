import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slice/counterSlice';
import cartReducer from '../slice/cartSlice';

const store = configureStore({
    reducer: { // Define your reducer here
        counter: counterReducer,
        cart: cartReducer,
    },
    extreaReducer: { // Define your extra reducer here
        },
    devTools: true, // Enable Redux DevTools if in development environment
});

export default store;