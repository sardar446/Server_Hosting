import { createSlice } from "@reduxjs/toolkit";

export const CounteReducer = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        }
    }
})
export const { increment, decrement } = CounteReducer.actions
export default CounteReducer.reducer