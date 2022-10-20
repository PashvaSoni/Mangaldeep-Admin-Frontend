import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {config} from '../../Constant'
import { useAuth } from "../../Context/AuthContext";

export const apiSlice = createApi({
    reducerPath:'api', //in-future if need another api-ref than use apiTwo
    baseQuery : fetchBaseQuery({
        baseUrl: config.URLS.BACKEND_URL,
        prepareHeaders:(Headers,{extra})=>{
            // const {User} =useAuth();
            Headers.set('authorization', `Bearer ${'User.token javu jove ahiya'}`)
            return Headers
        }
    }),
    tagTypes:['Category'],
    keepUnusedDataFor:90,
    endpoints: builder =>({})
})