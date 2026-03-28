"use client";
import React from "react";
import Counter from "./components/Counter";
import ArrayStateVariable from "./components/ArrayStateVariable";
import BooleanStateVariables from "./components/BooleanStateVariables";
import StringStateVariables from "./components/StringStateVariables";
import DateStateVariable from "./components/DateStateVariable";
import ObjectStateVariable from "./components/ObjectStateVariable";
import ClickEvent from "./ClickEvent";
import EventObjects from "./components/EventObjects";
import PassingDataOnEvent from "./components/PassingDataOnEvent";
import PassingFunctions from "./components/PassingFunctions";
import SharingState from "./components/SharingState";
import PathParameters from "./components/PathParameters";
import ReduxExamplesStoreProvider from "./ReduxExamples/ReduxExamplesStoreProvider";
import ContextExamples from "./ReactStateContext";
import ZustandExamples from "./ZustandExamples";

export default function Lab4() {
    const TheFunctionExample = () => {
        alert("Function passed as a parameter");
    };

    return (
        <div id="wd-lab4" className="container">
            <h3>Lab 4</h3>
            <div className="row">
                <div className="col-12">
                    <h4>4.2 Managing State and User Input with Forms</h4>
                    <ClickEvent />
                    <EventObjects />
                    <PassingDataOnEvent />
                    <PassingFunctions theFunction={TheFunctionExample} />
                    <Counter />
                    <BooleanStateVariables />
                    <StringStateVariables />
                    <DateStateVariable />
                    <ObjectStateVariable />
                    <ArrayStateVariable />
                    <SharingState />
                    <PathParameters />
                    <ReduxExamplesStoreProvider />
                    <ContextExamples />
                    <ZustandExamples />
                </div>
            </div>
        </div>
    );
}
