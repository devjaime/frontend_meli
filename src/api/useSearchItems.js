import axios from 'axios';
import { useEffect, useState } from 'react';

const API_BASE = process.env.REACT_APP_API_BASE;

export const useSearchItems = (query) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    let isSubscribed = true;
    const fetchData = async () => {
      try {
        const options = {
          'Content-Type': 'application/json',
          params: { q: query },
        };
        const res = await axios.get(`${API_BASE}/api/items`, options);
        setResponse(await res.data);
        if (isSubscribed) setResponse(response);
      } catch (err) {
        setError(err);
      }
    };
    if (isSubscribed) fetchData().then();
    isSubscribed = false;
    return () => (isSubscribed);
  }, [query]);
  return { response, error };
};

export default useSearchItems;
