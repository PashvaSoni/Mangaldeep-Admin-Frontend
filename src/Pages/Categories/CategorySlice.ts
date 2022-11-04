import { apiSlice } from "../../Features/api/apiSlice";

export const extendedCategoryApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllCategories : builder.query({
            query : ()=>('/categories'),
            providesTags:['Category']
        }),
        createCategory: builder.mutation({
            query : (request) =>({
                url:'/categories',
                method:'POST',
                body:request,
            }),
            invalidatesTags:['Category'],
            
        }),
        updateCategory: builder.mutation({
            query : ({_id,name})=>({
                url:`/categories/${_id}`,
                method:'PUT',
                body:{name:name}
            }),
            invalidatesTags:['Category']
        }),
        deleteCategory: builder.mutation({
            query : ({_id,...rest})=>({
                url:`/categories/${_id}`,
                method:'DELETE',
            }),
            invalidatesTags:['Category']
        })
    })
});

export const {useGetAllCategoriesQuery,useCreateCategoryMutation,useUpdateCategoryMutation,useDeleteCategoryMutation} = extendedCategoryApiSlice;