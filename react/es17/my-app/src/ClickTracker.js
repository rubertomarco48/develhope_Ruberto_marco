import React from "react";

export class ClickTracker extends React.Component{
    state = {
        lastButton : ""
    }

    handleLastButton = (e) =>{
        const buttonName = e.target.name;
        this.setState({ lastButton : buttonName })
    }

   render(){
    return <div>
            <button name="button 1" onClick={this.handleLastButton}>Button 1</button>
            <button name="button 2" onClick={this.handleLastButton}>Button 2</button>
            <button name="button 3" onClick={this.handleLastButton}>Button 3</button>
            <h1>Ultimo bottone cliccato: {this.state.lastButton}</h1>
        </div>
    
   }
}