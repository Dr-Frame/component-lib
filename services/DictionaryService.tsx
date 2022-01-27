import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IWord } from '../types/dictionaryTypes';

const headers = {
  'x-rapidapi-host': 'translo.p.rapidapi.com',
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

export const wordsApi = createApi({
  reducerPath: 'userDictionatyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: LHBaseUrl,
  }),
  tagTypes: ['Words'],
  endpoints: build => ({
    getWords: build.query<IWord, IWord[]>({
      query: () => ({
        url: '/dictionary',
        method: 'GET',
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
  }),
});
