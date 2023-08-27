import React from "react";
import { ClickCounter } from "./ClickCounter";
import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="counter" element={<ClickCounter/>}/>
      </Routes>
      </div>
    );
  }
}
