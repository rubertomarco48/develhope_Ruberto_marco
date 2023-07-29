import React from "react";
import { Login } from "./Login";
export class App extends React.Component{
    stampaggio =(credenziali)=>{
        console.log(credenziali);
    }
    render(){
        return <Login onLogin={this.stampaggio}/>
    }
}