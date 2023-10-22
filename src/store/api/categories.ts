import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {Category} from '@types';

interface GetCategoriesResponse {
  data: Category[];
  meta: {
    pagination: {
      page: number;
      pageCount: number;
      pageSize: number;
      total: number;
    };
  };
}

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummy-api-jtg6bessta-ey.a.run.app',
  }),
  endpoints: builder => ({
    getCategories: builder.query<GetCategoriesResponse, void>({
      query: () => '/getCategories',
    }),
    getQuestions: builder.query<any, void>({
      query: () => '/getQuestions',
    }),
  }),
});

export const {useGetCategoriesQuery, useGetQuestionsQuery} = categoriesApi;
