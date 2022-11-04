import { apiSlice } from "../../Features/api/apiSlice";

export const extendedClassSlice=apiSlice.injectEndpoints({
    endpoints: builder=>({
        getAllClass:builder.query({
            query : ()=>('/classes'),
            providesTags:['Class']
        }),
        createClass : builder.mutation({
            query:(request)=>({
                url:'/classes',
                method:'POST',
                body:request
            }),
            invalidatesTags:['Class']
        }),
        updateClass:builder.mutation({
            query:(request)=>({
                url:`/classes/${request._id}`,
                method:'PUT',
                body:{name : request.name}
            }),
            invalidatesTags:['Class']
        }),
        deleteClass:builder.mutation({
            query:(request)=>({
                url:`/classes/${request._id}`,
                method:'DELETE'
            }),
            invalidatesTags:['Class']
        })
    })
});

export const {useGetAllClassQuery,useCreateClassMutation,useDeleteClassMutation,useUpdateClassMutation} = extendedClassSlice;