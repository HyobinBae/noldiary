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
  _id: string;
  author: string;
  title: string;
  departure: string;
  destination: string;
  departureDate: Date;
  arrivalDate: Date;
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
