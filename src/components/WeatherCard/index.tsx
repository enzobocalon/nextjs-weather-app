import * as S from './styles'

import WeatherDisplay from '../WeatherDisplay';
import { formatDate } from '../../utils/formatDate';
import { WeatherForecast } from '../../types/ApiResponse';
import { useContext } from 'react';
import { WeatherContext } from '../../contexts/Weather';

interface WCProps{
  weather: WeatherForecast | undefined,
  limited?: boolean
}

const WeatherCard = ({weather, limited}: WCProps) => {
  const {celsius} = useContext(WeatherContext)
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

  return (
    <S.Container>
      <p>{handleData(weather.date)}</p>
      <WeatherDisplay
        isMainWeather={false}
        weather={weather.day.condition.code}/>
      <div>
        <span>{celsius ? weather.day.mintemp_c : weather.day.mintemp_f} {celsius ? 'ºC' : 'ºF'}</span>
        <span>{celsius ? weather.day.maxtemp_c : weather.day.mintemp_f} {celsius ? 'ºC' : 'ºF'}</span>
      </div>
    </S.Container>
  );
}

export default WeatherCard
