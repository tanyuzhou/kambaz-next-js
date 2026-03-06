import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../database";

const initialState = {
    enrollments: enrollments,
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        enrollCourse: (state, { payload: { user, course } }) => {
            const newEnrollment = { _id: new Date().getTime().toString(), user, course };
            state.enrollments = [...state.enrollments, newEnrollment] as any;
        },
        unenrollCourse: (state, { payload: { user, course } }) => {
            state.enrollments = state.enrollments.filter(
                (enrollment: any) =>
                    !(enrollment.user === user && enrollment.course === course)
            );
        },
    },
});

export const { enrollCourse, unenrollCourse } = enrollmentsSlice.actions;

export default enrollmentsSlice.reducer;
