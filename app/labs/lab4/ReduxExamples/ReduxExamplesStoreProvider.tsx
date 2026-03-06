"use client";
import React from "react";
import ReduxExamples from "./index";
import { Provider } from "react-redux";
import store from "./store";

export default function ReduxExamplesStoreProvider() {
    return (
        <Provider store={store}>
            <ReduxExamples />
        </Provider>
    );
}
