import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WriteProps } from "../types";

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
    // postImage: builder.mutation<PresignedUrl, string>({
    //   query: (image) => ({
    //     url: `/diary/create/presigned`,
    //     method: "post",
    //     body: image,
    //   }),
    //   transformResponse: (response: PresignedUrl) => {
    //     return response;
    //   },
    //   transformErrorResponse: (response: { status: string | number }) => {
    //     return response.status;
    //   },
    // }),
  }),
});

export const { usePostDiaryMutation } = apiSlice;
