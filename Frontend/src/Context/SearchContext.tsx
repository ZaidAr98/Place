import React, { useState, useContext } from "react";
type SearchContext = {
  destination: string;
  placeId: string;
  saveSearchValues: (destination: string) => void;
};

const SearchContext = React.createContext<SearchContext | undefined>(undefined);

type SearchContextProvideProps = {
  children: React.ReactNode;
};

export const SearchContextProvide = ({
  children,
}: SearchContextProvideProps) => {
  const [destination, setDestination] = useState<string>("");
    const [placeId, setPlaceId] = useState<string>("");

  const saveSearchValues = (
    destination: string,
 
    placeId?: string
  ) => {
    setDestination(destination);
  
    if (placeId) {
      setPlaceId(placeId);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        destination,
        placeId,
        saveSearchValues,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  return context as SearchContext;
};
