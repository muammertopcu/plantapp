import {configureStore} from '@reduxjs/toolkit';
import {categoriesApi} from './api/categories';

export const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },

  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(categoriesApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
