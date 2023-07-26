import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  WriteProps,
  GetPresignedUrl,
  PutPresignedUrlProps,
  DiaryProps,
  UserInfo,
  UserSetting,
  DiaryDetail,
  CourseList,
} from "../types";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://10.58.52.128:3000",
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
    getCourseList: builder.query<
      CourseList,
      { categoryCode: string; pageNo: number }
    >({
      query: ({ categoryCode, pageNo }) => ({
        url: `tour/main/${categoryCode}/${pageNo}`,
        // url: "/COURSE_LIST.json",
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }),
      transformResponse: (response: CourseList) => {
        return response;
      },
      transformErrorResponse: (error: { status: string | number }) => {
        return error.status;
      },
    }),
    getCourseDetail: builder.query<
      CourseList,
      { contenttypeid: number; contentID: number }
    >({
      query: ({ contenttypeid, contentID }) => ({
        url: `/tour/main/detail/${contenttypeid}/${contentID}`,
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }),
      transformResponse: (response: CourseList) => {
        return response;
      },
      transformErrorResponse: (error: { status: string | number }) => {
        return error.status;
      },
    }),
    getSearchTour: builder.query<CourseList, string>({
      query: (keyword) => ({
        url: `/tour/search?keyword=${keyword}`,
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }),
      transformResponse: (response: CourseList) => {
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
  useGetCourseListQuery,
} = apiSlice;

export const {
  endpoints: {
    getPresignedUrl,
    getDiaryList,
    getUserInfo,
    getDiaryDetail,
    getSearchDiary,
    getCourseList,
  },
} = apiSlice;
