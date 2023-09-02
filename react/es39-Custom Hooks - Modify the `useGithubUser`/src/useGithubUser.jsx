import { useEffect, useState } from "react";

export function useGithubUser(user) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function fetchData() {
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

  useEffect(() => {
    if (user) {
      fetchData();
    }
  },[user]);

  return {
    data: data,
    error: error,
    loading: loading,
    fetchUser: fetchData, // Return the fetch function
  };
}
