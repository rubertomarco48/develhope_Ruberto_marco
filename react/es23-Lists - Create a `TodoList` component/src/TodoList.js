import React from "react"
export class TodoList extends React.Component{
    state={
        array : [],
        newItem : "",
    }
    handleChange =(e) =>{
        this.setState({ newItem : e.target.value})
    }
    addNewItem =()=>{
      if(this.state.newItem !== ""){
      this.setState((prevState) => ({
            array: [...prevState.array, prevState.newItem],
            newItem: ""
          }));
    }}

    render(){
        const todo = this.state.array.map((e)=><li>{e}</li>)
        return(
            <ul >
                <h1>TO DO LIST</h1>
                <input name="newItem" value = {this.state.newItem} type="text" onChange={this.handleChange} />
                <button onClick={this.addNewItem}>New Element</button>
                {todo}
            </ul>
        )
    }
}