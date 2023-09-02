import React from "react";
import { ClickCounter } from "./ClickCounter";
import { Route, Routes,Link } from "react-router-dom";
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
      </Routes>
      <ul>
        <li><Link to ="/">Home</Link></li>
        <li><Link to="counter">Counter</Link></li>
        <li><Link to="users/:username">GitHub</Link></li>
        <li><Link to="/">HOME</Link></li>        
      </ul>
      </div>
    );
  }
}
