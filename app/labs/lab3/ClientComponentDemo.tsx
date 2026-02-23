"use client";
import React, { useState } from "react";

export default function ClientComponentDemo() {
    const [clickCount, setClickCount] = useState(0);

    return (
        <div>
            <h1>Client Component Demo</h1>
            <p>This component uses "use client" so it can maintain states and attach event listeners.</p>
            <button
                className="btn btn-primary"
                onClick={() => setClickCount(clickCount + 1)}
            >
                Click Me
            </button>
            <p className="mt-2">You have clicked the button {clickCount} times.</p>
        </div>
    );
}
