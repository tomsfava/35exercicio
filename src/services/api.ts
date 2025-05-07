import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Venue } from '../Pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getVenues: builder.query<Venue[], void>({
      query: () => '/restaurantes'
    }),
    getVenue: builder.query<Venue, string | undefined>({
      query: (id) => `/restaurantes/${id}`
    })
  })
})

export const { useGetVenuesQuery, useGetVenueQuery } = api
export default api
