import { apiSlice } from "../../Features/api/apiSlice";

export const extendedCategoryApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllCategories : builder.query({
            query : ()=>'/categories',
            providesTags:['Category']
        })
    })
});

export const {useGetAllCategoriesQuery} = extendedCategoryApiSlice;