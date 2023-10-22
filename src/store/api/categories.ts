import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {Category} from '@types';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummy-api-jtg6bessta-ey.a.run.app',
  }),
  endpoints: builder => ({
    getCategories: builder.query<Category[], void>({
      query: () => '/getCategories',
    }),
  }),
});

export const {useGetCategoriesQuery} = categoriesApi;
