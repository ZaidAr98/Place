import { useQuery } from "react-query";
import * as apiClient from "../api-clients";
import LatestDestinationCard from "../Components/LatestDestinationCard";

const Home = () => {
  const { data: places } = useQuery("fetchQuery", () =>
    apiClient.fetchPlaces()
  );

  const topRowPlaces = places?.slice(0, 2) || [];
  const bottomRowPlaces = places?.slice(2) || [];

  return (
    <div className="space-y-3">
      <h2 className="text-3xl font-bold">Latest Destinations</h2>
      <p>Most recent destinations added by our hosts</p>
      <div className="grid gap-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {topRowPlaces.map((place) => (
            <LatestDestinationCard place={place} />
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {bottomRowPlaces.map((place) => (
            <LatestDestinationCard place={place} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
