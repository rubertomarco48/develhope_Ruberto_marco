import React from "react";
import { Login } from "./Login";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Reset } from "./Reset";

export class App extends React.Component {
  state = {
    interactive: { name: "" },
    login: { username: "", password: "" },
  };
  stampaggio = (credenziali) => {
    console.log(credenziali);
  };
  handleReset = () => {
    this.setState({
        interactive: { name: "" },
        login: { username: "", password: "" }
    });
};
  render() {
    return (
      <>
        <InteractiveWelcome />
        <Login onLogin={this.stampaggio} />
        <Reset onClick={this.handleReset} />
      </>
    );
  }
}
import React from "react";
export class Login extends React.Component{
    state={
        username : "",
        password : "",
    }
    handlerChange=(e)=>{
        
        const nome = e.target.name;
        const value = e.target.value;
        console.log(value);
        console.log(nome);
        this.setState({
             [nome]:value,
            })
    }
   /*  onLogin=()=>{
        const username = this.state.username;
        const password = this.state.password;
        this.props.login({ username, password })
    
    } */
    onLogin = () => {
        const { username, password } = this.state;
    
        // Chiamiamo la funzione onLogin passata come prop e passiamo lo stato corrente
        if (this.props.onLogin) {
          this.props.onLogin({ username, password });
        }
      };
    render(){
        return(
            <div>
                <input name="username" type="text" onChange={this.handlerChange}/>
                <input name="password" type="password" onChange={this.handlerChange}/>
                <button disabled={!this.state.username || !this.state.password} onClick={this.onLogin}>Log in</button>
            </div>
        )
    }
}
import React from "react";
export class Reset extends React.Component{
    
    render(){
        return(
            <button onClick={this.onclick}>Reset</button>
        )
    }
}
import React from "react";

export class Welcome extends React.Component{
    render(){
        return <h1>Welcome,{this.props.name}</h1>
    }
}
import React from "react";
import {Welcome} from "./Welcome"
export class InteractiveWelcome extends React.Component{
    state ={
        name:""
    }

    changeName = (e) =>{
        const Username = e.target.value;
        this.setState({ name : Username })
    }

   render(){
    return (
        <div>
            <input type="text" onChange={this.changeName}/>
            <Welcome name={this.state.name}/>
        </div>)
    
   }
}
import ReactDOM from "react-dom";
import { App } from "./App";

const root = document.querySelector("#root");
ReactDOM.render(<App/>,root)
