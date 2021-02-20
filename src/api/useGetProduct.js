import axios from 'axios';
import PropTypes from 'prop-types';  
import { useEffect, useState } from 'react';
 
const api_base = process.env.REACT_APP_API_BASE;

export const useGetProduct = (itemId) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        let isSubscribed = true;
        const fetchData = async () => {
            try {
                let options = { 
                    'Content-Type': 'application/json'
                }
                const res = await axios.get(
                    `${api_base}/api/items/${itemId}`,
                    options
                );
                const data = await res.data;
                if (isSubscribed) setResponse(data);
            } catch (error) {
                console.error('something happened', error);
                setError(error);
            }
        }
        if (isSubscribed) fetchData().then();
        return () => (isSubscribed = false);
    }, [itemId]);
    return { response, error };
}

useGetProduct.prototype={
    itemId: PropTypes.string.isRequired
}
export default useGetProduct;