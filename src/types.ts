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
  content: [
    {
      contentid: number;
      firstimage: string;
      title: string;
    }
  ];
  totalCount: number;
}

export interface CourseDetail {
  common: {
    contentid: number;
    contenttypeid: number;
    firstimage: string;
    addr1?: string;
    mapx: number;
    mapy: number;
    overview: string;
    title: string;
  };
  introduction: {
    distance: string;
    schedule?: string;
    taketime?: string;
    theme?: string;
  };
  course: [
    {
      subnum: number;
      subname: string;
      subdetailoverview: string;
      subdetailimg: string;
    }
  ];
}
