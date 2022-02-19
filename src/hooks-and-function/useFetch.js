import { useState, useEffect } from "react";

const useFetch = (fetchFunc) => {
  const [state, setState] = useState({
    isLoading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    fetchFunc()
      .then((data) => setState({ isLoading: false, data, error: null }))
      .catch((error) => setState({ isLoading: false, data: null, error }));
  }, [fetchFunc]);

  const { isLoading, data, error } = state;

  return { isLoading, data, error };
};

export default useFetch;
