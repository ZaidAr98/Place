import { useQuery } from "react-query";
import { useSearchContext } from "../Context/SearchContext";
import * as apiClient from "../api-clients";
import { useState } from "react";
import SearchResultsCard from "../Components/SearchResultsCard";
import Pagination from "../Components/Pagination";
import StarRatingFilter from "../Components/StarRatingFilter";
import PlaceTypesFilter from "../Components/PlaceTypesFilter";

const Search = () => {
  const search = useSearchContext();
  const [page, setPage] = useState<number>(1);
  const [selectedStars, setSelectedStars] = useState<string[]>([]);
  const [selectedPlaceTypes, setSelectedPlaceTypes] = useState<string[]>([]);
    
  const searchParams = {
    destination: search.destination,
    stars: selectedStars,
    types: selectedPlaceTypes,
    page: page.toString(),
  };

  const { data: placeData } = useQuery(["searchPlaces", searchParams], () =>
    apiClient.searchPlaces(searchParams)
  );
  const handleStarsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const starRating = event.target.value;

    setSelectedStars((prevStars) =>
      event.target.checked
        ? [...prevStars, starRating]
        : prevStars.filter((star) => star !== starRating)
    );
  };

  const handlePlaceTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const placeType = event.target.value;

    setSelectedPlaceTypes((prevPlaceTypes) =>
      event.target.checked
        ? [...prevPlaceTypes, placeType]
        : prevPlaceTypes.filter((place) => place !== placeType)
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      <div className="rounded-lg border border-slate-300 p-5 h-fit sticky top-10">
        <div className="space-y-5">
          <h3 className="text-lg font-semibold border-b border-slate-300 pb-5">
            Filter by:
          </h3>
          <StarRatingFilter
            selectedStars={selectedStars}
            onChange={handleStarsChange}
          />
          <PlaceTypesFilter
            selectedPlaceTypes={selectedPlaceTypes}
            onChange={handlePlaceTypeChange}
          />
       
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">
            {placeData?.pagination.total} Places found
            {search.destination ? ` in ${search.destination}` : ""}
          </span>
        
        </div>
        {placeData?.data.map((place) => (
          <SearchResultsCard place={place} />
        ))}
        <div>
          <Pagination
            page={placeData?.pagination.page || 1}
            pages={placeData?.pagination.pages || 1}
            onPageChange={(page) => setPage(page)}
          />
        </div>
      </div>
    </div>
  )
}

export default Search