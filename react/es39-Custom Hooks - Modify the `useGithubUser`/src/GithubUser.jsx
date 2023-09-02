import { useGithubUser } from "./useGithubUser";

export function GithubUser(props) {
  const user = useGithubUser(props.user);
  const { data, error, loading } = user;

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