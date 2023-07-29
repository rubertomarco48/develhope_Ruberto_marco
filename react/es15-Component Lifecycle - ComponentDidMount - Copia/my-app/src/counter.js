import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
  /* constructor(props){
    super(props)
  } */
  render() {
    return (
      <div>
        <CounterDisplay base= {12} interval={1000} increment={2}/>
      </div>
    );
  }
}
