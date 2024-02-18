export type PlaceType = {
  _id: string;
  userId: string;
  name: string;
  address: string;
  city: string;
  country: string;
  description: string;
  type: string;
  starRating: number;
  imageUrls: string[];
  lastUpdated: Date;
  newProperty: string;
};

export type HotelSearchResponse = {
  data: PlaceType[];
  pagination: {
    total: number;
    page: number;
    pages: number;
  };
};