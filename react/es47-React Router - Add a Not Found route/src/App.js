import React from "react";
import { ClickCounter } from "./ClickCounter";
import { Link,Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { ShowGithubUser } from "./ShowGithubUser";

export class App extends React.Component {
  render() {
    return (
      <div>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="counter" element={<ClickCounter/>}/>
        <Route path="users/" element={<ShowGithubUser/>}/>
        <Route path="users/:username" element={<ShowGithubUser/>}/>
        <Route path="*" element={<div><p>NOT FOUND</p><Link to="/">Go to HOME</Link></div>}/>
      </Routes>
      </div>
    );
  }
}
