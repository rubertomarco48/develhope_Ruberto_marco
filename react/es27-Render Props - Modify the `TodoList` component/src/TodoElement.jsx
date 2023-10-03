export function TodoElement(props) {
 return(
   <div>
      {props.render}
      <button onClick={()=>props.onClick()}></button>
   </div>
    
 )   
}