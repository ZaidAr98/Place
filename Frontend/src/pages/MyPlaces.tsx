import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as apiClient from "../api-clients";
import { BsBuilding, BsMap } from "react-icons/bs";
import { BiStar } from "react-icons/bi";
const MyPlaces = () => {
  const { data: placeData } = useQuery(
    "fetchMyPlaces",
    apiClient.fetchMyPlaces,
    {
      onError: () => {},
    }
  );
  if (!placeData) {
    return <span>No  Data is found</span>;
  }

  return (
    <div className="space-y-5">
      <span className="flex justify-between">
        <h1 className="text-3xl font-bold">My Places</h1>
        <Link
          to="/add-place"
          className="flex bg-green-600 text-white text-xl font-bold p-2  hover:bg-blue-500"
        >
          Add Place
        </Link>
      </span>
      <div className="grid grid-cols-1 gap-8">
        {placeData.map((place) => (
          <div className="flex flex-col justify-between border border-slate-300  rounded-lg p-8 gap-5">
            <h2 className="text-2xl font-bold">{place.name}</h2>
            <div className="whitespace-pre-line">{place.description}</div>
            <div className="grid grid-cols-5 gap-2">
              <div className="border border-slate-300 rounded-sm p-3 flex items-center ">
                <BsMap className="mr-1" />
                {place.city},{place.country}
              </div>
              <div className="border border-slate-300 rounded-sm p-3 flex items-center ">
                <BsBuilding className="mr-1" />
                {place.type}
              </div>
               
              <div className="border border-slate-300 rounded-sm p-3 flex items-center ">
                <BiStar className="mr-1" />
                {place.starRating} Star Rating
              </div>
            </div>
            <span className="flex justify-end">
              <Link
                className="flex p-2 bg-blue-600 text-white text-xl font-bold hover:bg-blue-500"
                to={`/edit-place/${place._id}`}
              >
                View Details
              </Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPlaces;
