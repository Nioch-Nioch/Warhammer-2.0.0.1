import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [dataOfFatch, setDataOfFatch] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
            fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error('Dane nie zostały pobrane z serwera');
                }
                return res.json();
            }).then(data => {
                setDataOfFatch(data);
                setIsLoading(false);
                setError(null); 
            }).catch(err => {
                setIsLoading(false);
                setError(err.message);
            })
    }, [url]) ;
    
    return { dataOfFatch, isLoading, error}
}


export default useFetch;