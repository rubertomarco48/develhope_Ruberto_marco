import { useState } from "react";

export function useGithubUser() {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function fetchData(user) {
    setLoading(true);
    setError(null);

    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((dataFetch) => {
        setData(dataFetch);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }

  return {
    data: data,
    error: error,
    loading: loading,
    fetchUser: fetchData, // Restituisce la funzione fetch
  };
}