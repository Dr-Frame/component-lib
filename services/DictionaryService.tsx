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
    getTranslation: build.query<>({
      query: () => ({
        url: `/Dictionary/Lookup?to=ru&api-version=3.0&from=en`,
        method: 'POST',
        headers: headersMicrosoft,
        body: [{ Text: 'mother' }],
      }),
    }),
  }),
});

//TODO: zoom api try
const JWT_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6IkdUbmJtbW80UXR5czJoLU14SndsUGciLCJleHAiOjE3OTg3MzI4MDAsImlhdCI6MTY0NDI0MzgxM30.dMq4AvzydksEg2f86sN_QXbjyq6KQuMcpoGdnUiQRPY'; //expires 31.12.2026
export const zoomApi = createApi({
  reducerPath: 'Zoom',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.zoom.us/v2',
  }),
  endpoints: build => ({
    getMeetings: build.query({
      query: () => ({
        url: '/users/me/meetings?page_size=300',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${JWT_TOKEN}`,
          Cookie:
            'TS01a42040=01b2081ea584489023ca3632a4da7e1837fe8d3c01382568a9a122164b619734817c8ef2bbb9be516aaed919170ca3a4ca6512922b; TS01d0dc3f=01b2081ea584489023ca3632a4da7e1837fe8d3c01382568a9a122164b619734817c8ef2bbb9be516aaed919170ca3a4ca6512922b; cred=CA7E42C5A6ED919F5DA8B2C9F2A57698',
        },
        redirect: 'follow',
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
