export interface WriteProps {
  id: string;
  title: string;
  departure: string;
  destination: string;
  departureDate: string;
  arrivalDate: string;
  thumnailImage: string;
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
