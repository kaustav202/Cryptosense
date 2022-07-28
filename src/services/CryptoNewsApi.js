import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const NewsHeader = {
    'x-bingapis-adk': 'true',
    'x-rapidapi-key': '483681ce57mshfc311bba22d869bp1f5654jsnadd88fe141eb',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest= (url) => ({url , headers: NewsHeader})


export const CryptoNewsApi = createApi(
    {
        reducerPath: 'CryptoNewsAPi',
        baseQuery: fetchBaseQuery({baseUrl}),
        endpoints: (builder) => (
            {
                getCryptoNews: builder.query(
                    {
                        query: ({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&count=${count}`)
                    }
                )
            }
        )
    }
)

export const {
    useGetCryptoNewsQuery
} = CryptoNewsApi


