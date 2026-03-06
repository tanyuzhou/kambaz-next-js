"use client";
import React, { useState } from "react";

export default function SharingState() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Sharing State</h2>
            <p>Count: {count}</p>
            <div className="d-flex gap-2 mb-3">
                <button
                    onClick={() => setCount(count + 1)}
                    className="btn btn-success"
                >
                    Increment
                </button>
                <button
                    onClick={() => setCount(count - 1)}
                    className="btn btn-danger"
                >
                    Decrement
                </button>
            </div>
            <hr />
        </div>
    );
}
