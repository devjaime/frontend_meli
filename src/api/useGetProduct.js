import axios from 'axios';
import { useEffect, useState } from 'react';

const API_BASE = process.env.REACT_APP_API_BASE;

export const useGetProduct = (itemId) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    let isSubscribed = true;
    const fetchData = async () => {
      try {
        const options = {
          'Content-Type': 'application/json',
        };
        const res = await axios.get(
          `${API_BASE}/api/items/${itemId}`,
          options,
        );
        setResponse(await res.data);
        if (isSubscribed) setResponse(response);
      } catch (err) {
        setError(err);
      }
    };
    if (isSubscribed) fetchData().then();
    isSubscribed = false;
    return () => (isSubscribed);
  }, [itemId]);
  return { response, error };
};
export default useGetProduct;
