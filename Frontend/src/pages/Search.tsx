import { useQuery } from "react-query";
import { useSearchContext } from "../Context/SearchContext";
import * as apiClient from "../api-clients";
import { useState } from "react";
import SearchResultsCard from "../Components/SearchResultsCard";
const Search = () => {
  const search = useSearchContext();
  const [page, setPage] = useState<number>(1);
  const searchParams = {
    destination: search.destination,
    page: page.toString(),
  };

  const { data: placeData } = useQuery(["searchPlaces", searchParams], () =>
    apiClient.searchPlaces(searchParams)
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      <div className="rounded-lg border border-slate-300 p-5 h-fit sticky top-10">
        <div className="space-y-5">
          <h3 className="text-lg font-semibold border-b border-slate-300 pb-5">
            Filter by:
          </h3>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">
            {placeData?.pagination.total} Places found
            {search.destination ? `in ${search.destination}` : ""}
          </span>
        </div>
        {placeData?.data.map((place) => (
          <SearchResultsCard place={place} />
        ))}
      </div>
    </div>
  );
};

export default Search;