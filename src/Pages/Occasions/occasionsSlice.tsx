import { apiSlice } from "../../Features/api/apiSlice";

export const extendedOccasionSlice=apiSlice.injectEndpoints({
    endpoints: builder=>({
        getAllOccasions:builder.query({
            query : ()=>('/occasions'),
            providesTags:['Occasion']
        }),
        createOccasion : builder.mutation({
            query:(request)=>({
                url:'/occasions',
                method:'POST',
                body:request
            }),
            invalidatesTags:['Occasion']
        }),
        updateOccasion:builder.mutation({
            query:(request)=>({
                url:`/occasions/${request._id}`,
                method:'PUT',
                body:{name : request.name}
            }),
            invalidatesTags:['Occasion']
        }),
        deleteOccasion:builder.mutation({
            query:(request)=>({
                url:`/occasion/${request._id}`,
                method:'DELETE'
            }),
            invalidatesTags:['Occasion']
        })
    })
});

export const {useGetAllOccasionsQuery,useCreateOccasionMutation,useDeleteOccasionMutation,useUpdateOccasionMutation} = extendedOccasionSlice;