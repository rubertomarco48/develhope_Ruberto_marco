import React, { useState } from "react";
import { GithubUser } from "./GithubUser";

export function App () {
  const [newUser,setNewUser]=useState("")
    return (
      <div>
        <input value={newUser} onChange={(e)=>setNewUser(e.target.value)}/>
        <GithubUser user={newUser}/>
      </div>
    );
  
}
