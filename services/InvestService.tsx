import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICategory, IInvestItem } from '../types/investTypes';

export const investAPI = createApi({
  reducerPath: 'investAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000',
  }),
  tagTypes: ['Investment', 'Category'],
  endpoints: build => ({
    fetchAllInvestment: build.query<IInvestItem[], number>({
      query: (limit = 10) => ({
        url: '/investments',
        params: { _limit: limit },
      }),
      providesTags: result => ['Investment'],
    }),
    createInvestment: build.mutation<IInvestItem, IInvestItem>({
      query: investment => ({
        url: '/investments',
        method: 'POST',
        body: investment,
      }),
      invalidatesTags: ['Investment'],
    }),
    deleteInvestment: build.mutation<number, number>({
      query: id => ({
        url: `/investments/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Investment'],
    }),
    editInvestment: build.mutation<IInvestItem, IInvestItem>({
      query: investment => ({
        url: `/investments/${investment.id}`,
        method: 'PATCH',
        body: investment,
      }),
      invalidatesTags: ['Investment'],
    }),
    fetchCategory: build.query<ICategory[], any>({
      query: () => ({
        url: '/category',
        method: 'GET',
      }),
      providesTags: ['Category'],
    }),
    addCategory: build.mutation<ICategory, ICategory>({
      query: category => ({
        url: '/category',
        method: 'POST',
        body: category,
      }),
      invalidatesTags: ['Category'],
    }),
    editCategory: build.mutation<ICategory, ICategory>({
      query: category => ({
        url: `/category/${category.id}`,
        method: 'PATCH',
        body: category,
      }),
      invalidatesTags: ['Category'],
    }),
    deleteCategory: build.mutation<ICategory, number>({
      query: id => ({
        url: `/category/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Category'],
    }),
  }),
});
