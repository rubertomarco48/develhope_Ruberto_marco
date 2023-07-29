import React from "react";

export class CounterDisplay extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.base,
    };
  }
/*   state={count:this.props.base} */
  
  componentDidMount() {
    this.int = setInterval(() => {
      this.setState((State) => ({
        count: State.count + this.props.increment,
      }));
    }, this.props.interval);
  }

  render() {
    return (
        <h1>Conteggio {this.state.count}</h1>      
    );
  }
}