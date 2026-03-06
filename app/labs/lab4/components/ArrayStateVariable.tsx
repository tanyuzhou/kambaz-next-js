"use client";
import React, { useState } from "react";

export default function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };
    const deleteElement = (index: number) => {
        setArray(array.filter((item, i) => i !== index));
    };
    return (
        <div id="wd-array-state-variables">
            <h2>Array State Variable</h2>
            <button onClick={addElement} className="btn btn-success mb-3">
                Add Element
            </button>
            <table className="table border">
                <tbody>
                    {array.map((item, index) => (
                        <tr key={index} className="d-flex justify-content-between">
                            <td className="w-100 fs-4 fw-bold">{item}</td>
                            <td>
                                <button
                                    onClick={() => deleteElement(index)}
                                    id={`wd-delete-element-click-${item}`}
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
