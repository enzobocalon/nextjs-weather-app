import { Weather } from "./Weather";
import { Location } from "./Location";

export interface ApiResponse {
  ip?: string,
  data: {
    current: Weather,
    forecast: Weather[],
    location: Location
  }
}
