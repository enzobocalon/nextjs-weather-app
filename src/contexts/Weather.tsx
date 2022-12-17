import React, { createContext, useState } from 'react';
import { ApiResponse } from '../types/ApiResponse';

interface IModes {
  weatherData: ApiResponse['data'] | null;
  setWeatherData:  React.Dispatch<React.SetStateAction<ApiResponse['data'] | null>>;
  celsius: boolean,
  setCelsius: React.Dispatch<React.SetStateAction<boolean>>
}

type ProviderProps = {
  children: React.ReactNode
}

export const WeatherContext = createContext({} as IModes);

const WeatherProvider = ({children}: ProviderProps) => {
  const [weatherData, setWeatherData] = useState<ApiResponse['data'] | null>(null);
  const [celsius, setCelsius] = useState(true);

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        setWeatherData,
        celsius,
        setCelsius
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
