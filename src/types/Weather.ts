export interface Weather {
  temperature: number,
  condition: {
    text: string,
    icon: string
  }
  wind_mph: number,
  wind_dir: string,
  humidity: number,
  vis_miles: number
  pressure_mb: number,
};
