
import { Request,Response } from "express"
import Place from "../models/place"
import { PlaceSearchResponse } from "../shared/type"
export const getSearch = async (req: Request, res: Response) => {
  try {
     const query = constructSearchQuery(req.query);

     let sortOptions = {};
     switch (req.query.sortOption) {
       case "starRating":
         sortOptions = { starRating: -1 };
         break;
      
     }
    const pageSize = 5;
    const pageNumber = parseInt(
      req.query.page ? req.query.page.toString() : "1"
    );
    const skip = (pageNumber - 1) * pageSize;

    const places = await Place.find(query).sort(sortOptions).skip(skip).limit(pageSize);

    const total = await Place.countDocuments();

    const response: PlaceSearchResponse = {
      data: places,
      pagination: {
        total,
        page: pageNumber,
        pages: Math.ceil(total / pageSize),
      },
    };

    res.json(response);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Something went wrong" });
  }
}

const constructSearchQuery = (queryParams: any) => {
  let constructedQuery: any = {};




  if (queryParams.destination) {
    constructedQuery.$or = [
      { city: new RegExp(queryParams.destination, "i") },
      { country: new RegExp(queryParams.destination, "i") },
    ];
  }

    if (queryParams.types) {
    constructedQuery.type = {
      $in: Array.isArray(queryParams.types)
        ? queryParams.types
        : [queryParams.types],
    };
  }

  if (queryParams.stars) {
    const starRatings = Array.isArray(queryParams.stars)
      ? queryParams.stars.map((star: string) => parseInt(star))
      : parseInt(queryParams.stars);
         constructedQuery.starRating = { $in: starRatings };
   }
  return constructedQuery
  }