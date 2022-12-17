import axios from "axios"

export const getSearchedContent = async (location: string) => {
  const response = await axios.get(`http://api.weatherapi.com/v1/search.json?key=8cdae16bc23d4715b9e164704221612&q=${location}`);
  return response.data;
}
