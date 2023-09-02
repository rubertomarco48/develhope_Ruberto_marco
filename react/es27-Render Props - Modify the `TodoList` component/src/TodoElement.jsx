export function TodoElement({onDelete,todo}) {
 return(
    <li>
        <p>{todo}</p>
        <button onClick={onDelete}>Delete</button>
    </li>
    
 )   
}