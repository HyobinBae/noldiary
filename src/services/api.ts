import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WriteProps, PresignedUrl } from "../types";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://192.168.123.117:3000",
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    postDiary: builder.mutation<WriteProps, string>({
      query: (diary) => ({
        url: `/diary/create`,
        method: "post",
        prepareHeaders: async (headers: Headers) => {
          const token = localStorage.token;
          if (token) {
            headers.set("Accept", "application/json");
            headers.set("Authorization", `Bearer ${token}`);
          }
          return headers;
        },
        body: diary,
      }),
      transformResponse: (response: WriteProps) => {
        return response;
      },
      transformErrorResponse: (response: { status: string | number }) => {
        return response.status;
      },
    }),
    postImage: builder.mutation<PresignedUrl, string>({
      query: (image) => ({
        url: `/diary/create/presigned`,
        method: "post",
        body: image,
      }),
      transformResponse: (response: PresignedUrl) => {
        return response;
      },
      transformErrorResponse: (response: { status: string | number }) => {
        return response.status;
      },
    }),
  }),
});

export const { usePostDiaryMutation } = apiSlice;
