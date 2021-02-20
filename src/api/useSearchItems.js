import axios from 'axios';
import { useEffect, useState } from 'react';

const api_base = process.env.REACT_APP_API_BASE;

const useSearchItems = query => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        let isSubscribed = true;
        const fetchData = async () => {
            try {
                let options = { 
                    'Content-Type': 'application/json',
                    params: {
                        q: query
                    }
                }
           
                const res = await axios.get(
                    `${api_base}/api/items`,
                    options
                );
                console.log(JSON.stringify(res.data))
                const data = await res.data;
                
                if (isSubscribed) setResponse(data);
            } catch (error) {
                console.error('something happened', error);
                setError(error);
            }
        }
        if (isSubscribed) fetchData().then();
        return () => (isSubscribed = false);
    }, [query]);
    return { response, error };
}

export default useSearchItems;