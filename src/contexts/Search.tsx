import React, { createContext, useState } from 'react';

interface IModes {
  isSearchActive: boolean;
  setIsSearchActive:  React.Dispatch<React.SetStateAction<boolean>>;
}

type ProviderProps = {
  children: React.ReactNode
}

export const SearchContext = createContext({} as IModes);

const SearchProvider = ({children}: ProviderProps) => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <SearchContext.Provider
      value={{
        isSearchActive,
        setIsSearchActive
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
