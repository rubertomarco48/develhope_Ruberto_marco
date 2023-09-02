import { useGithubUser } from "./useGithubUser";

export function GithubUser(props){
    console.log(`questo è lo user:${props.user}`);
    const user = useGithubUser(props.user);
    const {data,errore} = user;
    if(errore!== null){
        return <p>{errore.message}</p>
    }  
    if ( data === {}) {
        return <p>Loading...</p>;
        
      }
    
    return(
        <>
        <h1>{data.login}</h1>
        <h2>{data.id}</h2>
        </>
    )
}