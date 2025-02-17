import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "../api-clients";
import { AiFillStar } from "react-icons/ai";

const Detail = () => {
  const { placeId } = useParams();
  const { data: place } = useQuery(
    "fetchPlaceDetailUsingId",
    () => apiClient.fetchPlaceDetailUsingId(placeId as string),
    {
      enabled: !!placeId,
    }
  );
  if (!place) {
    return <></>;
  }
  return (
    <div className="space-y-6">
      <div>
        <span className="flex">
          {Array.from({ length: place.starRating }).map(() => (
            <AiFillStar className="fill-yellow-400" />
          ))}
        </span>
        <h1 className="text-3xl font-bold">{place.name}</h1>
      </div>
      <div className="grd grid-cols-1 lg:grid-cols-3 gap-4">
        {place.imageUrls.map((image) => (
          <div className="h-[300px]">
            <img
              src={image}
              alt={place.name}
              className="rounded-md w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>
     

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
        <div className="whitespace-pre-line">{place.description}</div>
       
      </div>
    </div>
  );
};

export default Detail;
