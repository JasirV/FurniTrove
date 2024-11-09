import {useQuery} from '@tanstack/react-query';
 import api from '../api/axiosIntespter'


 const useProductFetching =()=>{
     return useQuery({
        queryKey:['products'],
        queryFn:async()=>{
            const response =await api('users/products')
            return response.data.data
        },
        staleTime: 1000 * 60 * 5,
     })
 }
 export default useProductFetching