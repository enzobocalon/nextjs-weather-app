import { Weather } from "./Weather";
import { Location } from "./Location";

export interface WeatherForecast {
  date: string,
  day: Weather
}

export interface ApiResponse {
  ip?: string,
  data: {
    current: Weather,
    forecast: {
      forecastday: WeatherForecast[]
    },
    location: Location
  }
}
