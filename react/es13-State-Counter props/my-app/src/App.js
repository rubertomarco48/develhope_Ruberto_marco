import React from "react";
import { Counter } from "./counter";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Counter base= {12} interval={1000} increment={2}/>
      </div>
    );
  }
}
