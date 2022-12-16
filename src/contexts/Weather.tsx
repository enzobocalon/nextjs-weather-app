import React, { createContext, useState } from 'react';
import { ApiResponse } from '../types/APIResponse';

interface IModes {
  weatherData: ApiResponse['data'] | null;
  setWeatherData:  React.Dispatch<React.SetStateAction<ApiResponse['data'] | null>>;
}

type ProviderProps = {
  children: React.ReactNode
}

export const WeatherContext = createContext({} as IModes);

const WeatherProvider = ({children}: ProviderProps) => {
  const [weatherData, setWeatherData] = useState<ApiResponse['data'] | null>(null);

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        setWeatherData
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
