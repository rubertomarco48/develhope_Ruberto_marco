import { useGithubUser } from "./useGithubUser";

export function GithubUser({user}){
    const {data}=useGithubUser(user);
    if (!data.login) {
        return <p>Loading...</p>;
      }
    return(
        <>
        <h1>{data.login}</h1>
        <h2>{data.id}</h2>
        </>
    )
}