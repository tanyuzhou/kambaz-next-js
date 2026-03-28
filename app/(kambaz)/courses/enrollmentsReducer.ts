import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    enrollments: [],
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        setEnrollments: (state, action) => {
            state.enrollments = action.payload;
        },
        enrollCourse: (state, { payload: enrollment }) => {
            state.enrollments = [...state.enrollments, enrollment] as any;
        },
        unenrollCourse: (state, { payload: { user, course } }) => {
            state.enrollments = state.enrollments.filter(
                (enrollment: any) =>
                    !(enrollment.user === user && enrollment.course === course)
            );
        },
    },
});

export const { setEnrollments, enrollCourse, unenrollCourse } = enrollmentsSlice.actions;

export default enrollmentsSlice.reducer;
