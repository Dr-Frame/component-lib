import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IInvestItem } from '../types/Investment';

export const investAPI = createApi({
  reducerPath: 'investAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000',
  }),
  tagTypes: ['Investment'],
  endpoints: build => ({
    fetchAllInvestment: build.query<IInvestItem[], number>({
      query: (limit = 10) => ({
        url: '/investments',
        params: { _limit: limit },
      }),
      providesTags: result => ['Investment'],
    }),
  }),
});
