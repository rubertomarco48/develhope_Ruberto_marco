import { Link } from "react-router-dom";

export function Welcome(){
    return(<> 
        <h1>WELCOME</h1>
         <Link to="counter">Counter</Link>
        <hr/>
        <Link to="users/">GitHub</Link>
        <hr/>
        <Link to="/">HOME</Link>
</>
    )
}