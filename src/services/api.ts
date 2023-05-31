import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WriteProps, PutPresignedUrlProps, GetPresignedUrl } from "../types";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://192.168.122.210:3000",
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
    getPresignedUrl: builder.mutation<GetPresignedUrl, string>({
      query: (file) => ({
        url: `/diary/presigned`,
        headers: {
          Accept: "application/json",
          // Authorization: `Bearer ${token}`,
        },
        method: "post",
        body: file,
      }),
      transformResponse: (response: GetPresignedUrl) => {
        return response;
      },
      transformErrorResponse: (response: { status: string | number }) => {
        return response.status;
      },
    }),
    uploadImage: builder.mutation<PutPresignedUrlProps, PutPresignedUrlProps>({
      query: ({ url, file }) => ({
        url: url,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        method: "put",
        body: file,
      }),
      transformResponse: (response: PutPresignedUrlProps) => {
        return response;
      },
      transformErrorResponse: (response: { status: string | number }) => {
        return response.status;
      },
    }),
  }),
});

export const {
  usePostDiaryMutation,
  useGetPresignedUrlMutation,
  useUploadImageMutation,
} = apiSlice;

export const {
  endpoints: { getPresignedUrl, uploadImage },
} = apiSlice;
