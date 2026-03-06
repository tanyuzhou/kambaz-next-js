"use client";
import React, { createContext, useContext, useState } from "react";

const CounterContext = createContext<any>(null);

export function CounterProvider({ children }: { children: React.ReactNode }) {
    const [count, setCount] = useState(0);
    return (
        <CounterContext.Provider value={{ count, setCount }}>
            {children}
        </CounterContext.Provider>
    );
}

function CounterContextComponent() {
    const { count, setCount } = useContext(CounterContext);
    return (
        <div id="wd-counter-context">
            <h2>Counter Context</h2>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)} className="btn btn-success me-2"
                id="wd-counter-context-increment-click"> Increment </button>
            <button onClick={() => setCount(count - 1)} className="btn btn-danger"
                id="wd-counter-context-decrement-click"> Decrement </button>
            <hr />
        </div>
    );
}

export default function CounterWrapper() {
    return (
        <CounterProvider>
            <CounterContextComponent />
        </CounterProvider>
    );
}
