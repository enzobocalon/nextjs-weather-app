import * as S from './styles'

import WeatherDisplay from '../WeatherDisplay';
import { formatDate } from '../../utils/formatDate';
import { WeatherForecast } from '../../types/ApiResponse';

interface WCProps{
  weather: WeatherForecast | undefined,
  limited?: boolean
}

const WeatherCard = ({weather, limited}: WCProps) => {

  if (limited || !weather) {
    return (
      <S.LimitedContainer>
        <p>Forecast limited by the API&apos;s free plan!</p>
      </S.LimitedContainer>
    )
  }

  const handleData = (date: string) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 2);
    return formatDate(newDate.toISOString());
  };

  console.log(weather)

  return (
    <S.Container>
      <p>{handleData(weather.date)}</p>
      <WeatherDisplay isMainWeather={false} weather={weather.day.condition.code}/>
      <div>
        <span>{weather.day.mintemp_c} ºC</span>
        <span>{weather.day.maxtemp_c}ºC</span>
      </div>
    </S.Container>
  );
}

export default WeatherCard
