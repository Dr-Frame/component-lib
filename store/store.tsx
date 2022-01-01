import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { investAPI } from '../services/InvestService';

const rootReducer = combineReducers({
  [investAPI.reducerPath]: investAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware().concat(investAPI.middleware);
    },
  });
};

//store types
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
