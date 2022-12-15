import * as S from './styles'

import WeatherDisplay from '../WeatherDisplay';

const WeatherCard = () => {
  return (
    <S.Container>
      <p>Tomorrow</p>
      <WeatherDisplay isMainWeather={false}/>
      <div>
        <span>16ºC</span>
        <span>18ºC</span>
      </div>
    </S.Container>
  );
}

export default WeatherCard
