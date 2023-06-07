import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WriteProps, GetPresignedUrl, PutPresignedUrlProps } from "../types";

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
    // uploadImage: builder.mutation<PutPresignedUrlProps, PutPresignedUrlProps>({
    //   query: ({ url, file }) => ({
    //     url: url,
    //     headers: {
    //       Accept: "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //     method: "put",
    //     body: file,
    //   }),
    //   transformResponse: (response: PutPresignedUrlProps) => {
    //     console.log("이미지 업로드함?", response);
    //     return response;
    //   },
    //   transformErrorResponse: (response: { status: string | number }) => {
    //     return response.status;
    //   },
    // }),
  }),
});

export const { usePostDiaryMutation, useGetPresignedUrlMutation } = apiSlice;

export const {
  endpoints: { getPresignedUrl },
} = apiSlice;
