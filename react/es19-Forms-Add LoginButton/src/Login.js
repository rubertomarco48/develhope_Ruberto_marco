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