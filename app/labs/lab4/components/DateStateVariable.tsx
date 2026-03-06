"use client";
import React, { useState } from "react";

export default function DateStateVariable() {
    const [startDate, setStartDate] = useState(new Date("2024-12-27"));
    const dateObjectToHtmlDateString = (date: Date) => {
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
            2,
            "0"
        )}-${String(date.getDate() + 1).padStart(2, "0")}`;
    };
    return (
        <div id="wd-date-state-variables">
            <h2>Date State Variables</h2>
            <h3>{dateObjectToHtmlDateString(startDate)}</h3>
            <h3>{dateObjectToHtmlDateString(startDate)}</h3>
            <input
                className="form-control w-50"
                type="date"
                value={dateObjectToHtmlDateString(startDate)}
                onChange={(e) => setStartDate(new Date(e.target.value))}
            />
            <hr />
        </div>
    );
}
