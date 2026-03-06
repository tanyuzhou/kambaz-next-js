import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: "Hello World",
};

const helloReducer = createSlice({
    name: "hello",
    initialState,
    reducers: {},
});

export default helloReducer.reducer;
