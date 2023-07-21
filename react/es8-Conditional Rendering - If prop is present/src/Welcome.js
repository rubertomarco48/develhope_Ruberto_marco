import React from "react";
import { Age } from "./Age";
export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>
          Welcome,<strong>{this.props.name}</strong>
        </p>
        {this.props.age && <Age age={this.props.age} />}
      </div>
    );
  }
}

Welcome.defaultProps = { name: "Mario", /* age: 18  */};
