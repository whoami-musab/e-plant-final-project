import { createSlice } from "@reduxjs/toolkit";

// Initial state for the cart
const initialState = { count: [] };

// Define the slice for the cart

const cartSlice = createSlice({ // Define the slice for the cart
    name: "cart",
    initialState,
    reducers: {
        // Add an item to the cart
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        // Remove an item from the cart
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id!== action.payload);
        },
    },
});

// Export the actions and reducer
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;