import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICryptoData } from '../types/cryptoTypes';
import {
  symbolsUrlConstructor,
  uuidUrlConstructor,
} from '../utils/urlSymbolConstructor';

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
          timePeriod: '7d',
        },
      }),
      providesTags: result => ['Crypto'],
    }),
    fetchInvestedCrypto: build.query<ICryptoData, string[]>({
      query: symbols => ({
        url: `/coins?${symbolsUrlConstructor(symbols)}&tiers=1&timePeriod=7d`,
        headers: baseHeaders,
        orderBy: 'marketCap',
        orderDirection: 'desc',
        method: 'GET',
      }),
      providesTags: result => ['Invest'],
    }),
    searchCrypto: build.query<ICryptoData[], string>({
      query: text => ({
        url: `/coins?search=${text}`,
        headers: baseHeaders,
        method: 'GET',
        params: {
          orderBy: 'marketCap',
          orderDirection: 'desc',
        },
      }),
    }),
    searchCoinById: build.query<ICryptoData, string[]>({
      query: id => ({
        url: `/coins?${uuidUrlConstructor(id)}`,
        headers: baseHeaders,
        method: 'GET',
      }),
    }),
  }),
});
