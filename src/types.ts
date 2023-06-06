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

export interface PutPresignedUrlProps {
  url: string;
}

export interface GetPresignedUrl {
  fileName: string;
}
