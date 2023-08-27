import { Link } from "react-router-dom";

export function Welcome(){
    return(<> 
        <h1>Welcome</h1>
        <Link to="counter">Counter</Link>
        <hr/>
        <Link to="users/:username">GitHub</Link>
</>
    )
}