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

export interface Image {
  image: string;
}

export interface PresignedUrl {
  url: string;
}
