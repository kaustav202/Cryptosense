import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import CryptoDetails from '../components/CryptoDetails';

const Headers = {
    'X-RapidAPI-Key': '483681ce57mshfc311bba22d869bp1f5654jsnadd88fe141eb',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = url =>  ({url, headers: Headers});

export const CryptoApi = createApi(
    {
        reducerPath: 'CryptoAPi',
        baseQuery: fetchBaseQuery({baseUrl}),
        endpoints: (builder) => (
            {
                getCryptos: builder.query(
                    {
                        query: (count) => createRequest(`/coins?limit=${count}`)
                    }
                ),
                getCryptoDetails:builder.query(
                    {
                        query: (coinId) => createRequest(`/coin/${coinId}`)
                    }
                ),

                getCryptoHistory: builder.query(
                    {
                    query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timePeriod=${timeperiod}`),
                    }
                ),
            }
        )
    }
)

export const {
    useGetCryptosQuery
} = CryptoApi

export const{
    useGetCryptoDetailsQuery
} = CryptoApi

export const{
    useGetCryptoHistoryQuery
} = CryptoApi


