"use client";
import React from "react";
import CounterContextWrapper from "./CounterContext";
import TodoContextWrapper from "./TodoContext";

export default function ContextExamples() {
    return (
        <div id="wd-context-examples">
            <CounterContextWrapper />
            <TodoContextWrapper />
        </div>
    );
}
