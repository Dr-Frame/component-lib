import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IWord } from '../types/dictionaryTypes';
import { ICategory } from '../types/investTypes';

const headers = {
  'x-rapidapi-host': 'translo.p.rapidapi.com',
  'x-rapidapi-key': '42faddc7b6msh739e48229432cd5p16abeejsn18fdcaaa812d',
};

const headersMicrosoft = {
  'content-type': 'application/json',
  'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
  'x-rapidapi-key': '42faddc7b6msh739e48229432cd5p16abeejsn18fdcaaa812d',
};

const transloBaseUrl = process.env.NEXT_PUBLIC_DICTIONARY_1_API_URL;
const freeDictionaryBaseUrl = process.env.NEXT_PUBLIC_DICTIONARY_2_API_URL;
const LHBaseUrl = process.env.NEXT_PUBLIC_DB_URL;

export const dictionaryApi = createApi({
  reducerPath: 'dictionaryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: transloBaseUrl,
  }),
  endpoints: build => ({
    getTranslation: build.query<object, string>({
      query: word => ({
        url: `/translate?to=ru&text=${word}&from=en&translations=true`,
        method: 'GET',
        headers,
      }),
    }),
  }),
});

export const dictionaryApi2 = createApi({
  reducerPath: 'dictionaryApi2',
  baseQuery: fetchBaseQuery({
    baseUrl: freeDictionaryBaseUrl,
  }),
  endpoints: build => ({
    getWord: build.query<object, string>({
      query: word => ({
        url: `/${word}`,
        method: 'GET',
      }),
    }),
  }),
});

//TODO: need https protocol
export const microsoftApi = createApi({
  reducerPath: 'microsoftApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://microsoft-translator-text.p.rapidapi.com',
  }),
  endpoints: build => ({
    getTranslation: build.query({
      query: () => ({
        url: `/Dictionary/Lookup?to=ru&api-version=3.0&from=en`,
        method: 'POST',
        headers: headersMicrosoft,
        body: [{ Text: 'mother' }],
      }),
    }),
  }),
});

export const wordsApi = createApi({
  reducerPath: 'userDictionatyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: LHBaseUrl,
  }),
  tagTypes: ['Words', 'Categories'],
  endpoints: build => ({
    getWords: build.query<IWord[], number | undefined>({
      query: limits => ({
        url: '/dictionary',
        method: 'GET',
        params: {
          _limit: limits,
        },
      }),
      providesTags: result => ['Words'],
    }),
    addWord: build.mutation<IWord, IWord>({
      query: word => ({
        url: '/dictionary',
        method: 'POST',
        body: word,
      }),
      invalidatesTags: ['Words'],
    }),
    deleteWord: build.mutation<IWord, number>({
      query: id => ({
        url: `/dictionary/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Words'],
    }),
    updateWord: build.mutation<IWord, IWord>({
      query: word => ({
        url: `dictionary/${word.id}`,
        method: 'PATCH',
        body: word,
      }),
      invalidatesTags: ['Words'],
    }),
    getCategory: build.query<ICategory[], void>({
      query: () => ({
        url: `word-category`,
        method: 'GET',
      }),
      providesTags: ['Categories'],
    }),
    addCategory: build.mutation<ICategory[], ICategory>({
      query: category => ({
        url: `word-category`,
        method: 'POST',
        body: category,
      }),
      invalidatesTags: ['Categories'],
    }),
  }),
});
