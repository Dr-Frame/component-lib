import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICryptoData } from '../types/cryptoTypes';

const baseHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '42faddc7b6msh739e48229432cd5p16abeejsn18fdcaaa812d',
};

const baseURL = process.env.NEXT_PUBLIC_CRYPTO_API_URL;

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }),
  tagTypes: ['Crypto'],
  endpoints: build => ({
    fetchCryptoData: build.query<ICryptoData, number>({
      query: limits => ({
        url: '/coins',
        method: 'GET',
        headers: baseHeaders,
        params: {
          limit: limits,
          orderBy: 'marketCap',
          orderDirection: 'desc',
        },
      }),
      providesTags: result => ['Crypto'],
    }),
  }),
});
