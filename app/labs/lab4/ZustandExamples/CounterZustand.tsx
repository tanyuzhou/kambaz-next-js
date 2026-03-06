"use client";
import React from "react";
import { create } from "zustand";

const useCounterStore = create<any>((set) => ({
    count: 0,
    increment: () => set((state: any) => ({ count: state.count + 1 })),
    decrement: () => set((state: any) => ({ count: state.count - 1 })),
}));

export default function CounterZustand() {
    const { count, increment, decrement } = useCounterStore();
    return (
        <div id="wd-counter-zustand">
            <h2>Counter Zustand</h2>
            <h3>{count}</h3>
            <button onClick={increment} className="btn btn-success me-2" id="wd-counter-zustand-increment-click"> Increment </button>
            <button onClick={decrement} className="btn btn-danger" id="wd-counter-zustand-decrement-click"> Decrement </button>
            <hr />
        </div>
    );
}
