"use client";
import React, { useState } from "react";
export default function Counter() {
    const [count, setCount] = useState(7);
    return (
        <div id="wd-counter-use-state" className="mb-4">
            <h2>Counter: {count}</h2>
            <div className="d-flex gap-2">
                <button
                    onClick={() => setCount(count + 1)}
                    id="wd-counter-up-click"
                    className="btn btn-success"
                >
                    Up
                </button>
                <button
                    onClick={() => setCount(count - 1)}
                    id="wd-counter-down-click"
                    className="btn btn-danger"
                >
                    Down
                </button>
            </div>
        </div>
    );
}
