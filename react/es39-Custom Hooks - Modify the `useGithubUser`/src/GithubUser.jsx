import { useGithubUser } from "./useGithubUser";
import { useEffect } from "react";
export function GithubUser(props) {
  const user = useGithubUser();
  const { data, error, loading, fetchUser } = user;

  useEffect(() => {
    if (props.user) {
      fetchUser(props.user); // Chiama la funzione fetch nel componente
    }
  }, [props.user]);

  if (error !== null) {
    return <p>{error.message}</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{data.login}</h1>
      <h2>{data.id}</h2>
    </>
  );
}