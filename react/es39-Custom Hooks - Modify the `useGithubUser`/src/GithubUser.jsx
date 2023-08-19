import { useGithubUser } from "./useGithubUser";
import { useEffect } from "react";

export function GithubUser({ user }) {
  const { data, loading, error, fetchGithubUserData } = useGithubUser();

  useEffect(() => {
    if (user) {
      fetchGithubUserData(user);
    }
  }, [user, fetchGithubUserData]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return null;
  }

  return (
    <>
      <h1>{data.login}</h1>
      <h2>{data.id}</h2>
    </>
  );
}