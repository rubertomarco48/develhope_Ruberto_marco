import React,{createRef} from "react";

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.usernameInputRef = createRef();
  }

  componentDidMount() {
    this.usernameInputRef.current.focus();
    console.log(this.usernameInputRef.current.focus());
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    console.log("Username:", username);
    console.log("Password:", password);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            ref={this.usernameInputRef} 
            type="text"
            name="username"
            placeholder="Username"
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
          />
          <br/>
          <button type="reset">Reset</button>
          <br />
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}





