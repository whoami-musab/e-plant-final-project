import { createSlice } from "@reduxjs/toolkit";

// Initial state for the counter
const initialState = { count: 0 };

// Define the counter slice
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        INCREMENT: (state) =>{
            state.count += 1;
        },
        DECREMENT: (state) =>{
            state.count > 0 ? state.count -= 1 : state.count = 0;
        },
    },
});

// Export the reducer and actions
export const { INCREMENT, DECREMENT } = counterSlice.actions;
export default counterSlice.reducer;

