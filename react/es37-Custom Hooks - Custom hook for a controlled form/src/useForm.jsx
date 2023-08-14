import { useState } from "react";

export function useForm(){
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    function handleChangePassword(e){
        setPassword(e.target.password);
    }
    function handleChangeUsername(e){
        setUsername(e.target.username);
    }
    return {
        username : username,
        password : password,
        changePassword : handleChangePassword,
        changeUsername : handleChangeUsername
    }
}