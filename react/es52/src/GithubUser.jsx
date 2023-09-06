import { useState } from 'react';
import useSWR from 'swr';

export function GithubUser(props) {
  const [load,setLoad]=useState(false)
  const { data, error, mutate } = useSWR(`https://api.github.com/users/${props.user}`,async()=>{
    try {
      setLoad(true)
      if(props.user){
        const x =await fetch(`https://api.github.com/users/${props.user}`)
        const j= await x.json();
        console.log(j);
        setLoad(false)
        return j
      }
    } catch (error) {
      setLoad(false)
      return error
    }})  
  if(data?.message ==='Not Found') {
    return <p>NOT FOUND</p>
  } 
  if (error) {
    return <p>ERRORE</p>;
  }
  if(!data){
    return<p>Inserisci un nome valido</p>
  }
  if (!data&&load) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{data.login}</h1>
      <h2>{data.id}</h2>
      <button onClick={()=>mutate()}>Refresh</button>
    </>
  );
}