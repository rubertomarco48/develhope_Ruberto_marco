import React from "react";
import {useState} from "react";
export function Login ({onLogin}){
        const [username,setUsername]= useState("")
        const[password,setPassword]=useState("")
    const handlerChangeUsername = (e) =>{
        const value = e.target.value;
        setUsername(value);
             
    }
    const handlerChangePassword = (e) =>{
        const value = e.target.value;
        setPassword(value);
             
    }
   
    const onLog = () => {
        if (onLogin) {
          onLogin({ username, password });
        }
      }
        return(
            <div>
                <input name="username" type="text" onChange={handlerChangeUsername}/>
                <input name="password" type="password" onChange={handlerChangePassword}/>
                <button disabled={!username || !password} onClick={onLog}>Log in</button>
            </div>
        )
    }
