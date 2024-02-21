import { FormEvent, useState } from "react";
import { useSearchContext } from "../Context/SearchContext";
import { useNavigate } from "react-router-dom";
import { MdTravelExplore } from "react-icons/md";

const SearchBar = () => {
  const navigate = useNavigate();
  const search = useSearchContext();
  const [destination, setDestination] = useState<string>(search.destination);
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    search.saveSearchValues(
      destination,
    );
    navigate("/search");
  };
  



  return (
    <form
      onSubmit={handleSubmit}
      className="-mt-8 p-3 bg-green-800 rounded shadow-md grid grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 items-center gap-4"
    >
      <div className="flex   justify-between items-center  bg-white p-2">
        <MdTravelExplore size={25} className="mr-2" />
        <input
          placeholder="Enter the country..."
          className="text-md w-full focus:outline-none"
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
        />
      </div>

      <div className="gap-3">
        <button className="w-3/4 bg-blue-600 text-white h-full p-2 font-bold text-xl hover:bg-blue-500 ">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;