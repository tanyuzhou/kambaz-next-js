"use client";
import React from "react";
import CounterZustand from "./CounterZustand";
import TodoZustand from "./TodoZustand";

export default function ZustandExamples() {
    return (
        <div id="wd-zustand-examples">
            <CounterZustand />
            <TodoZustand />
        </div>
    );
}
