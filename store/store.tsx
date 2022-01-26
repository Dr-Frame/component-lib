import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/CryptoService';
import {
  dictionaryApi,
  dictionaryApi2,
  wordsApi,
} from '../services/DictionaryService';
import { investAPI } from '../services/InvestService';

const rootReducer = combineReducers({
  [investAPI.reducerPath]: investAPI.reducer,
  [cryptoApi.reducerPath]: cryptoApi.reducer,
  [dictionaryApi.reducerPath]: dictionaryApi.reducer,
  [dictionaryApi2.reducerPath]: dictionaryApi2.reducer,
  [wordsApi.reducerPath]: wordsApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware().concat(
        investAPI.middleware,
        cryptoApi.middleware,
        dictionaryApi.middleware,
        dictionaryApi2.middleware,
        wordsApi.middleware,
      );
    },
  });
};

//store types
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
