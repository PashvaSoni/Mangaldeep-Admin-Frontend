import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../../Features/api/apiSlice";

type Offer = {
    _id: string;
    title: string;
    description: string;
    imageurl: string[];
    targetlink: string;
    startdate: string;
    enddate: string;
    createdAt?: string;
    updatedAt?: string;
}
const OfferAdapter = createEntityAdapter<Offer>({
    selectId: (Offer) => Offer._id,
    sortComparer: (a, b) => -a.startdate.localeCompare(b.startdate)
})

const initialOfferState = OfferAdapter.getInitialState();

export const extendedOfferSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllOffers: builder.query({
            query: () => ('/Offers'),
            providesTags: ['Offer'],
            transformResponse: (responseData:Offer[]) => {
                const finalData=(responseData || []).map((item:any)=>{return item});
                return OfferAdapter.setAll(initialOfferState, responseData as Offer[]);
            }
        }),
        createOffer: builder.mutation({
            query: (request) => ({
                url: '/offers',
                method: 'POST',
                body: request
            }),
            invalidatesTags: ['Offer']
        }),
        updateOffer: builder.mutation({
            query: ({ _id, ...rest }) => ({
                url: `/offer/${_id}`,
                method: 'PUT',
                body: rest
            }),
            invalidatesTags: ['Offer']
        }),
        deleteOffer: builder.mutation({
            query: (request) => ({
                url: `/offer/${request._id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Offer']
        })
    })
});

export const { useCreateOfferMutation, useGetAllOffersQuery, useDeleteOfferMutation, useUpdateOfferMutation } = extendedOfferSlice;

console.log("Select test",extendedOfferSlice.endpoints.getAllOffers)
export const SelectOfferResults = extendedOfferSlice.endpoints.getAllOffers.select('');

const SelectOfferData = createSelector(SelectOfferResults, offerResults => offerResults.data);

export const {
    selectAll:selectAllOffers,
    selectById:SelectOfferById,
    selectIds:SelectAllIds,
    selectTotal:SelectTotalOffers
} = OfferAdapter.getSelectors((state: any) => { console.log("Testing State Value :", state); return SelectOfferData(state) ?? initialOfferState })