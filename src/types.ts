export interface WriteProps {
  title: string;
  departure: string;
  destination: string;
  departureDate: string;
  arrivalDate: string;
  thumbnailImage: string;
  contents: string;
  bookmark: boolean;
  isPublic: boolean;
}

export interface ImageUrl {
  url: string;
}

export interface DiaryProps {
  _id: string;
  author: string;
  title: string;
  departure: string;
  destination: string;
  departureDate: string;
  arrivalDate: string;
  thumbnailImage: string;
  contents: string;
  bookmark: boolean;
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PutPresignedUrlProps {
  url: string;
}

export interface GetPresignedUrl {
  url: string;
  fileName: string;
}

export interface UserInfo {
  name: string;
  profileImage: string;
  backgroundImage: string;
  nickname: string;
  message?: string;
  totalMyDiary: number;
  totalSharedDiary: number;
}

export interface UserSetting {
  profileImage?: string;
  backgroundImage?: string;
  nickname?: string;
  message?: string;
}

export interface DiaryDetail {
  _id: string;
  author: string;
  title: string;
  departure: string;
  destination: string;
  departureDate: string;
  arrivalDate: string;
  thumbnailImage: string;
  contents: string;
  bookmark: boolean;
  isPublic: boolean;
  createdAt: string;
}

export interface CourseList {
  item: [
    {
      firstImage: string;
      title: string;
    }
  ];
  totalCount: number;
}

export interface CourseDetail {}
