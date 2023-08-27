import { useState } from 'react'
import { FilteredList } from './FilteredList';

export function App(){
  const initialList = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Carol', age: 17 },
    { id: 4, name: 'David', age: 22 },
  ];

  const [lista, setLista] = useState(initialList);
  const [name,setName] = useState("")

function handleAddItem(){
    const newItem = {
      id: lista.length + 1,
      name: name,
      age: Math.floor(Math.random() * 50) + 1,
    };
    setLista([...lista, newItem]);
  };

  return (
    <div>
      <h1>FilteredList Example</h1>
      <input type="text" placeholder='insert name' value={name} onChange={(e)=>{setName(e.target.value)}} />
      <button onClick={handleAddItem}>Add Random Item</button>
      <FilteredList list={lista} />
    </div>
  );
};

