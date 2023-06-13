export interface WriteProps {
  title: string;
  departure: string;
  destination: string;
  departureDate: string;
  arrivalDate: string;
  thumnailImage?: string;
  contents: string;
  bookmark?: boolean;
  isPublic?: boolean;
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
  thumnailImage?: string;
  contents: string;
  bookmark?: boolean;
  isPublic?: boolean;
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
  profileImage: string;
  backgroundImage: string;
  nickname: string;
  message?: string;
  totalMyDiary: number;
  totalSharedDiary: number;
}
