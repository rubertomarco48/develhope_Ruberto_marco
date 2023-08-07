import React from "react";
import { Login } from "./Login";
import { InteractiveWelcome } from "./InteractiveWelcome";
export class App extends React.Component{
    stampaggio =(credenziali)=>{
        console.log(credenziali);
    }
    render(){
        return (
        <>
        <InteractiveWelcome/>
        <Login onLogin={this.stampaggio}/>
        </>)
    }
}