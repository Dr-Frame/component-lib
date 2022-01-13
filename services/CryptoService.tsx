import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICryptoData } from '../types/cryptoTypes';
import symbolsUrlConstructor from '../utils/urlSymbolConstructor';

const baseHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '42faddc7b6msh739e48229432cd5p16abeejsn18fdcaaa812d',
};

/* const coinrankHeaders = {
  'x-access-token':
    'coinranking3cc9b6964e0dc86ea6ab9d93195527ef2824739c83cc04db',
}; */

const baseURL = process.env.NEXT_PUBLIC_CRYPTO_API_URL;

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }),
  tagTypes: ['Crypto', 'Invest'],
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
    fetchInvestedCrypto: build.query<ICryptoData, string>({
      query: symbols => ({
        url: `/coins?${symbols}`,
        headers: baseHeaders,
        method: 'GET',
      }),
      providesTags: result => ['Invest'],
    }),
    searchCrypto: build.query<ICryptoData[], string>({
      query: text => ({
        url: `/coins`,
        headers: baseHeaders,
        method: 'GET',
        params: {
          orderBy: 'marketCap',
          orderDirection: 'desc',
          search: `${text}`,
        },
      }),
    }),
  }),
});
