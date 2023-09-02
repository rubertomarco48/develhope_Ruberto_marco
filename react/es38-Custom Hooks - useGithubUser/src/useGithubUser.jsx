import { useEffect, useState } from "react"

export function useGithubUser(user) {
    const [data,setData]=useState({})
    const [err,setErr]= useState(null)
    function myfetch (){
        console.log(user);
        fetch(`https://api.github.com/users/${user}`)
    .then(response => response.json())
    .then((dataFetch)=>{setData(dataFetch);console.log(dataFetch);})
    .catch((err)=>{setErr(err)})
    }
    

    useEffect(myfetch,[user])
    return{
        data : data,
        errore : err
    }
}
