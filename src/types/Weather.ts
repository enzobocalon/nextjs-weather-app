export interface Weather {
  temp_c: number,
  temp_f: number,
  condition: {
    text: string,
    code: number,
  }
  wind_mph: number,
  wind_dir: string,
  humidity: number,
  vis_miles: number
  pressure_mb: number,
};
