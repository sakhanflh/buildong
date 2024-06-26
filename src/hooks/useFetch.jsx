import { useEffect, useState } from "react";
import axios from "axios";

export function useFetch(url){
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchData(){
            try{
                const response = await axios.get(url)
                setData(response.data);
                setIsLoading(false);
            } catch (err){
                if(err.code == 'ERR_NETWORK'){
                    alert('Please check your network connection')
                }
                setIsError(err);
                setIsLoading(false)
            }
        }

        fetchData()
    }, [url])

    return { data, isLoading, isError };
}