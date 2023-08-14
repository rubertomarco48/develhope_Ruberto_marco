import { useEffect, useState } from "react"

export function useGithubUser({user}) {
    const [data,setData]=useState(null)
    function myfetch (){
        fetch(`https://api.github.com/users/${user}`)
    .then(response => response.json())
    .then((dataFetch)=>{setData(dataFetch);console.log(dataFetch);})
    .catch((err)=>{console.error(err)})
    }
    

    useEffect(myfetch,[user])
    return{
        data : data
    }
}
