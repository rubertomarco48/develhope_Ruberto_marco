import React from "react";
import { ClickCounter } from "./ClickCounter";
import { Link,Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { GithubUserList } from "./GithubUserList";
import { ShowGithubUser } from "./ShowGithubUser";

export class App extends React.Component {
  render() {
    return (
      <div>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="counter" element={<ClickCounter/>}/>
        <Route path="users" element={<GithubUserList/>}/>
        <Route path="/:username" element={<ShowGithubUser/>}/>
        <Route path="*" element={<div><p>NOT FOUND</p><Link to="/">Go to HOME</Link></div>}/>
      </Routes>
      </div>
    );
  }
}
