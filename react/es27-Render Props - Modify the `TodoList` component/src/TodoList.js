import React, { useState } from "react"
import { TodoElement } from "./TodoElement"
export function TodoList ({data}){
    const [array,setArray] = useState(data)
    const [newItem,setNewItem]=useState("")
const handleChange =(e) =>{
    setNewItem(e.target.value)
}
const addNewItem =()=>{
    if(newItem !== ""){
    setArray(prev => 
        [...prev,newItem]
        );
     setNewItem("")
    }
}
const handlerReset=()=>{
    setArray([])
}
const handleDelete=(todo)=>{
    const filtered = array.filter((element)=>element !== todo)
    setArray(filtered)
}

const TodoJSX = array.map((todo)=><TodoElement key={todo} render={<h5>{todo}</h5>} onClick={()=>handleDelete(todo)}/>)
        
        return(
            <div >
                <h1>TO DO LIST</h1>
                <input name="newItem" value = {newItem} type="text" onChange={handleChange} />
                <button onClick={addNewItem}>New Element</button>
                <button onClick={handlerReset}>RESET</button>
                <ul>
                   {TodoJSX}
                </ul>
            </div>
        )
    }
