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