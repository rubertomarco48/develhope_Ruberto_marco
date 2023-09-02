import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
export function ShowGithubUser(){
    const {username="rubertomarco48"} = useParams()
    const [Data,setData] = useState(null);
    
    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();
            setData(data);
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
    
        fetchUserData();
      }, [username]);
    
      if (!Data) {
        return <div>Loading...</div>;
      }
    
      return (
        <div>
          <h2>{Data.name}</h2>
          <p>Username: {Data.login}</p>
          <p>Followers: {Data.followers}</p>
          <p>Following: {Data.following}</p>
          <p>Public Repos: {Data.public_repos}</p>
          
        </div>
      );
    
}