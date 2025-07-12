// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coingecko.com/api/v3'}),
    tagTypes: ["crypto"], //for auto-refetching
    endpoints : (builder) => ({
        getCoinsMarket: builder.query({
            query: () => ({
                url: '/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=\'1h%2C24h\'&locale=en',
            }),
            providesTags: ['crypto']
        })
    })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCoinsMarketQuery } = cryptoApi