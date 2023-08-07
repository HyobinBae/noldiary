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

export interface ContentsList {
  content: [
    {
      contentid: number;
      contenttypeid: string;
      firstimage: string;
      title: string;
    }
  ];
  totalCount: number;
}

export interface ContentDetail {
  common: {
    contentid: number;
    contenttypeid: string;
    firstimage: string;
    addr1?: string;
    mapx: number;
    mapy: number;
    overview: string;
    title: string;
  };
  introduction: {
    //contenttypeid: 25
    distance?: string;
    schedule?: string;
    taketime?: string;
    theme?: string;

    //contenttypeid: 12
    infocenter: string;
    restdate: string;
    usetime: string;
    parking: string;

    //contenttypeid: 14
    infocenterculture: string;
    restdateculture: string;
    usetimeculture: string;
    parkingculture: string;

    //contenttypeid: 15
    sponsor1: string;
    sponsor1tel: string;
    eventstartdate: string;
    eventenddate: string;
    eventplace: string;

    //contenttypeid: 28
    infocenterleports?: string;
    restdateleports?: string;
    usetimeleports?: string;
    parkingleports?: string;

    //contenttypeid: 32
    infocenterlodging?: string;
    accomcountlodging?: number;
    parkinglodging?: string;
    reservationlodging?: string;

    //contenttypeid: 38
    infocentershopping?: string;
    restdateshopping?: string;
    opentime?: string;
    salesitem?: string;

    //contenttypeid: 39
    infocenterfood?: string;
    restdatefood?: string;
    opentimefood?: string;
    parkingfood?: string;
  };
  routine?: [
    {
      serialnum: number;
      infoname: string;
      infotext: string;
    }
  ];
  image?: {
    contentid: number;
    originimgurl: string;
    imgname: string;
  };
  course?: [
    {
      subnum: number;
      subname: string;
      subdetailoverview: string;
      subdetailimg: string;
    }
  ];
}

export interface Like {
  contentid: number;
  contenttypeid: string;
  firstimage: string;
  addr1?: string;
  mapx: number;
  mapy: number;
}
