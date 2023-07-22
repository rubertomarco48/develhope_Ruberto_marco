import React from "react";

export class Counter extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.base,
    };
  }

  componentDidMount() {
    this.int = setInterval(() => {
      this.setState((State) => ({
        count: State.count + this.props.increment,
      }));
    }, this.props.interval);
  }

  render() {
    return (
      <div>
        <h1>Conteggio {this.state.count}</h1>
      </div>
    );
  }
}
