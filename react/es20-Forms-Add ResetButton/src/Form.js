import React from "react"
export class Form extends React.Component{
    state={username:""}
    handlerSubmit = (e) =>{       
        e.preventDefault()
        const username = e.target.elements.username.value
        const pass = e.target.elements.password.value
        console.log(username+" "+ pass);
    }
    render(){
        return(
        <form onSubmit={this.handlerSubmit} onReset={()=>{this.setState({username:""})}}>
            <h1>Welcome,{this.state.username}</h1>
            <input name="username" onChange={(e)=>{this.setState({username: e.target.value})}}/>
            <input type="password" name="password"/>
            <button type="submit">submit</button>
            <button type="reset" >reset</button>
        </form>
        )
    }
}