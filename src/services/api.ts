import { Like } from "./../types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  WriteProps,
  GetPresignedUrl,
  PutPresignedUrlProps,
  DiaryProps,
  UserInfo,
  UserSetting,
  DiaryDetail,
  ContentsList,
  ContentDetail,
} from "../types";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://192.168.50.50:3000",
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
        method: "POST",
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
        method: "PATCH",
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
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
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
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
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
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
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
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
      transformResponse: (response: DiaryDetail) => {
        return response;
      },
      transformErrorResponse: (error: { status: string | number }) => {
        return error.status;
      },
    }),
    getSearchDiary: builder.query<
      Array<DiaryProps>,
      { queryName: string; keyword: string }
    >({
      query: ({ queryName, keyword }) => ({
        url: `/diary/filter?filter=${queryName}&keyword=${keyword}`,
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
      transformResponse: (response: DiaryProps[]) => {
        return response;
      },
      transformErrorResponse: (error: { status: string | number }) => {
        return error.status;
      },
    }),
    editDiary: builder.mutation<
      WriteProps,
      { diary: WriteProps; id: string | undefined }
    >({
      query: ({ diary, id }) => ({
        url: `/diary/${id}`,
        method: "PATCH",
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
    getContentsList: builder.query<
      ContentsList,
      { categoryCode: string; pageNo: number }
    >({
      query: ({ categoryCode, pageNo }) => ({
        url: `tour/main/${categoryCode}/${pageNo}`,
        // url: "/COURSE_LIST.json",
        method: "GET",
        headers: {
          Accept: "application/json",
          //ngrok cors해결
          // "ngrok-skip-browser-warning": "222",
        },
      }),
      transformResponse: (response: ContentsList) => {
        return response;
      },
      transformErrorResponse: (error: { status: string | number }) => {
        return error.status;
      },
    }),
    getContentDetail: builder.query<
      ContentDetail,
      { contentTypeID: string; contentID: number }
    >({
      query: ({ contentTypeID, contentID }) => ({
        url: `/tour/main/detail/${contentTypeID}/${contentID}`,
        method: "GET",
        headers: {
          Accept: "application/json",
          //ngrok cors해결
          // "ngrok-skip-browser-warning": "1",
        },
      }),
      transformResponse: (response: ContentDetail) => {
        return response;
      },
      transformErrorResponse: (error: { status: string | number }) => {
        return error.status;
      },
    }),
    getContentsListByCategory: builder.query<
      ContentsList,
      { category: string; pageNo: number }
    >({
      query: ({ category, pageNo }) => ({
        url: `tour/category/${category}/${pageNo}`,
        method: "GET",
        headers: {
          Accept: "application/json",
          //ngrok cors해결
          // "ngrok-skip-browser-warning": "1",
        },
      }),
      transformResponse: (response: ContentsList) => {
        return response;
      },
      transformErrorResponse: (error: { status: string | number }) => {
        return error.status;
      },
    }),
    getSearchCuration: builder.query<
      ContentsList,
      { pageNo: number; keyword: string }
    >({
      query: ({ pageNo, keyword }) => ({
        url: `/tour/${pageNo}/search?keyword=${keyword}`,
        method: "GET",
        headers: {
          Accept: "application/json",
          //ngrok cors해결
          // "ngrok-skip-browser-warning": "1",
        },
      }),
      transformResponse: (response: ContentsList) => {
        return response;
      },
      transformErrorResponse: (error: { status: string | number }) => {
        return error.status;
      },
    }),
    postLike: builder.mutation<boolean, Like>({
      query: (likeProps) => ({
        url: `/tour/like`,
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: likeProps,
      }),
      transformResponse: (response: boolean) => {
        return response;
      },
      transformErrorResponse: (error: { status: string | number }) => {
        return error.status;
      },
    }),
    deleteLike: builder.mutation<boolean, number>({
      query: (contentID) => ({
        url: `/tour/like/${contentID}`,
        method: "DELETE",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
      transformResponse: (response: boolean) => {
        return response;
      },
      transformErrorResponse: (error: { status: string | number }) => {
        return error.status;
      },
    }),
    getLike: builder.query<boolean, number>({
      query: (contentID: number) => ({
        url: `tour/like/${contentID}`,
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          // ngrok cors해결
          // "ngrok-skip-browser-warning": "1",
        },
      }),
      transformResponse: (response: boolean) => {
        return response;
      },
      transformErrorResponse: (error: { status: string | number }) => {
        return error.status;
      },
    }),
    getLikeList: builder.query<Array<Like>, void>({
      query: () => ({
        url: `tour/likelist`,
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
      transformResponse: (response: Array<Like>) => {
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
  useGetSearchDiaryQuery,
  useEditDiaryMutation,
  useGetContentsListQuery,
  useGetContentDetailQuery,
  useGetSearchCurationQuery,
  usePostLikeMutation,
  useGetLikeQuery,
  useGetLikeListQuery,
  useGetContentsListByCategoryQuery,
} = apiSlice;

export const {
  endpoints: {
    getPresignedUrl,
    getDiaryList,
    getUserInfo,
    getDiaryDetail,
    getSearchDiary,
    getContentsList,
    getContentDetail,
    getSearchCuration,
    postLike,
    deleteLike,
  },
} = apiSlice;
