export interface WriteProps {
  title: string;
  departure: string;
  destination: string;
  departureDate: Date;
  arrivalDate: Date;
  contents: string;
  bookmark?: boolean;
  public?: boolean;
}

export interface ImageUrl {
  url: string;
}

export interface PutPresignedUrlProps {
  url: string;
  file: string;
}

export interface GetPresignedUrl {
  url: string;
}
