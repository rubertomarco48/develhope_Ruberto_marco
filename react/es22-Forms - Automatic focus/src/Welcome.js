import React from "react";

export class Welcome extends React.Component{
    render(){
        return <h1>Welcome,{this.props.name}</h1>
    }
}