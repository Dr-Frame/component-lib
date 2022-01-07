import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/CryptoService';
import { investAPI } from '../services/InvestService';

const rootReducer = combineReducers({
  [investAPI.reducerPath]: investAPI.reducer,
  [cryptoApi.reducerPath]: cryptoApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware().concat(investAPI.middleware, cryptoApi.middleware);
    },
  });
};

//store types
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
