import useSWR from 'swr';

export function GithubUser(props) {
  const { data, error } = useSWR(`https://api.github.com/users/${props.user}`,()=>{
    return fetch(`https://api.github.com/users/${props.user}`)
    .then(res=>res.json())
    .catch(err=>err)})
  if (error) {
    return <p>{error.message}</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{data.login}</h1>
      <h2>{data.id}</h2>
    </>
  );
}