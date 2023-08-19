import { useState } from "react";

export function useGithubUser() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchGithubUserData(username) {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const userData = await response.json();
      setData(userData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  return {
    data: data,
    loading: loading,
    error: error,
    fetchGithubUserData: fetchGithubUserData,
  };
}