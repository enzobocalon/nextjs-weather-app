import axios from "axios"

export const getForecast = async (location: string) => {
  const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=8cdae16bc23d4715b9e164704221612&q=${location}&days=5&aqi=no&alerts=no`);
  return response.data;
}
