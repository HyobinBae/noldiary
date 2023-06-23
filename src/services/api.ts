import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "./store";
import {
  WriteProps,
  GetPresignedUrl,
  PutPresignedUrlProps,
  DiaryProps,
  UserInfo,
  UserSetting,
  DiaryDetail,
} from "../types";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://172.16.101.144:3000",
  // baseUrl: "/data",
});

const token = localStorage.getItem("token");

export const apiSlice = createApi({
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    postDiary: builder.mutation<WriteProps, WriteProps>({
      query: (diary) => ({
        url: `/diary`,
        // url: `/DIARY_LIST.json`,
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
    patchUserInfo: builder.mutation<UserSetting, UserSetting>({
      query: (userSetting) => ({
        url: `/users`,
        // url: `/DIARY_LIST.json`,
        method: "post",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: userSetting,
      }),
      transformResponse: (response: UserSetting) => {
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
    getDiaryList: builder.query<Array<DiaryProps>, void>({
      query: () => ({
        url: `/diary`,
        // url: `/DIARY_LIST.json`,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        method: "get",
      }),
      transformResponse: (response: DiaryProps[]) => {
        return response;
      },
      transformErrorResponse: (error: { status: string | number }) => {
        return error.status;
      },
    }),
    getUserInfo: builder.query<UserInfo, void>({
      query: () => ({
        url: `/users`,
        method: "get",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        // prepareHeaders: (headers: Headers, { getState }) => {
        //   const token = getState() as RootState;

        //   // If we have a token set in state, let's assume that we should be passing it.
        //   if (token) {
        //     headers.set("authorization", `Bearer ${token}`);
        //   }

        //   return headers;
        // },
      }),
      transformResponse: (response: UserInfo) => {
        return response;
      },
      transformErrorResponse: (error: { status: string | number }) => {
        return error.status;
      },
    }),
    getDiaryDetail: builder.query<DiaryDetail, string>({
      query: (id) => ({
        url: `/diary/${id}`,
        // url: `/DIARY_DETAIL.json`,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        method: "get",
      }),
      transformResponse: (response: DiaryDetail) => {
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
  usePatchUserInfoMutation,
  useGetPresignedUrlMutation,
  useGetDiaryListQuery,
  useGetUserInfoQuery,
  useGetDiaryDetailQuery,
} = apiSlice;

export const {
  endpoints: { getPresignedUrl, getDiaryList, getUserInfo, getDiaryDetail },
} = apiSlice;
