import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./courses/coursesReducer";
import modulesReducer from "./courses/[cid]/modules/modulesReducer";
import accountReducer from "./account/accountReducer";
import assignmentsReducer from "./courses/[cid]/assignments/assignmentsReducer";
import enrollmentsReducer from "./courses/enrollmentsReducer";

const store = configureStore({
    reducer: {
        coursesReducer,
        modulesReducer,
        accountReducer,
        assignmentsReducer,
        enrollmentsReducer,
    },
});

export default store;
