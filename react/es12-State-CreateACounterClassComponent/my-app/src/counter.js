import React from "react";

export class Counter extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((State) => ({
        count: State.count + 1,
      }));
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>Conteggio {this.state.count}</h1>
      </div>
    );
  }
}
