import {useQuery} from "react-query";
import axios from "axios";


export const useRqProductFetcher   =  (onError ,onSuccess ,refetchInterval) =>{
    return  useQuery('products',()=>{
            return axios.get('http://localhost:4000/products')
        },
        {'cacheTime':50000,
            'staleTime':0,
            'refetchOnMount':false,
            'refetchOnWindowFocus' : false,
            'refetchInterval' : refetchInterval,
            onSuccess,
            onError
        }
    )
}