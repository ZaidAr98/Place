export type PlaceType = {
  _id: string;
  userId: string;
  name: string;
  city: string;
  country: string;
  description: string;
  address: string;
  facilities: string[];
  starRating: number;
  imageUrls: string[];
  lastUpdated: Date;
};
