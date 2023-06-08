export interface WriteProps {
  title: string;
  departure: string;
  destination: string;
  departureDate: Date;
  arrivalDate: Date;
  contents: string;
  bookmark?: boolean;
  isPublic?: boolean;
}

export interface ImageUrl {
  url: string;
}

export interface DiaryProps {
  userInfo: {
    profileImage: string;
    nickName: string;
    comment: string;
  };

  title: string;
  departure: string;
  destination: string;
  departureDate: string;
  arrivalDate: string;
  thumnailImage?: string;
  contents: string;
  bookmark?: boolean;
  public?: boolean;
}
export interface PutPresignedUrlProps {
  url: string;
}

export interface GetPresignedUrl {
  url: string;
  fileName: string;
}
