import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  WriteProps,
  GetPresignedUrl,
  PutPresignedUrlProps,
  DiaryProps,
} from "../types";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://10.58.52.122:3000",
});

const token = localStorage.getItem("token");

export const apiSlice = createApi({
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    postDiary: builder.mutation<WriteProps, WriteProps>({
      query: (diary) => ({
        url: `/diary`,
        method: "post",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: diary,
      }),
      transformResponse: (response: WriteProps) => {
        return response;
      },
      transformErrorResponse: (error: { status: string | number }) => {
        return error.status;
      },
    }),
    getPresignedUrl: builder.mutation<GetPresignedUrl, PutPresignedUrlProps>({
      query: (fileName) => ({
        url: `/diary/presigned`,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        method: "post",
        body: fileName,
      }),
      transformResponse: (response: GetPresignedUrl) => {
        return response;
      },
      transformErrorResponse: (error: { status: string | number }) => {
        return error.status;
      },
    }),
    getDiaryList: builder.query<DiaryProps, DiaryProps>({
      query: () => ({
        url: `/diary`,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        method: "get",
      }),
      transformResponse: (response: DiaryProps) => {
        return response;
      },
      transformErrorResponse: (error: { status: string | number }) => {
        return error.status;
      },
    }),
  }),
});

export const {
  usePostDiaryMutation,
  useGetPresignedUrlMutation,
  useGetDiaryListQuery,
} = apiSlice;

export const {
  endpoints: { getPresignedUrl, getDiaryList },
} = apiSlice;
