import React from "react";


export class ClickCounter extends React.Component {
state = {
  count : 0
}
handleClick(){
  this.setState((prevState) =>({ count: prevState.count + 1 , }))
}
  render() {
    return (
      <div>
        <button onClick={()=>this.handleClick()}>incrementa</button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}
