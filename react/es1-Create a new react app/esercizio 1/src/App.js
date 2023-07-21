import { Message } from "./Message";
import { Hello } from "./hello";
import React from "react";
export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Message />
      </div>
    );
  }
}
