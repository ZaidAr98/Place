import { AiFillStar } from "react-icons/ai";
import { PlaceType } from "../../../backend/src/shared/type";
import { Link } from "react-router-dom";
import { BsBuilding, BsMap } from "react-icons/bs";
type Props = {
  place: PlaceType;
};

const SearchResultsCard = ({ place }: Props) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] border border-slate-300 rounded-lg p-8 gap-8">
      <div className="w-full h-[300px]">
        <img
          src={place.imageUrls[0]}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex-flex-col justify-between">
        <div className="grid grid-rows-[1fr_2fr_1fr]">
          <div>
            <div className="flex items-center">
              <span className="flex">
                {Array.from({ length: place.starRating }).map(() => (
                  <AiFillStar className="fill-yellow-400" />
                ))}
              </span>
              <span className="ml-1 text-sm">{place.type}</span>
            </div>
          </div>
          <Link
            to={`/detail/${place._id}`}
            className="text-2xl font-bold cursor-pointer"
          >
            {place.name}
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="border border-slate-300 rounded-sm p-3 flex items-center">
            <BsMap className="mr-1" />
            {place.city},{place.country}
          </div>
          <div className="border border-slate-300 rounded-sm p-3 flex items-center ">
            <BsBuilding className="mr-1" />
            {place.type}
          </div>
        </div>
        <div className="line-clamp-4 p-10">{place.description}</div>
        <div className="grid grid-cols-2 items-end whitespace-nowrap">
          <div className="flex gap-1 items-center">
            <Link
              to={`/detail/${place._id}`}
              className="bg-green-600 text-white h-full p-2 font-bold text-xl max-w-fit hover:bg-green-500"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsCard;
