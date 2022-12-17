import Button from '../Button';
import WeatherCard from '../WeatherCard';
import WeatherInformation from '../WeatherInformation';
import { IoMdNavigate } from 'react-icons/io'
import * as S from './styles'
import ProgressBar from '../ProgressBar';

import { useContext } from 'react';
import { WeatherContext } from '../../contexts/Weather';

const Forecast = () => {
  const { weatherData } = useContext(WeatherContext);

  if (!weatherData) {
    return null;
  }

  console.log(weatherData)

  return (
    <S.Container>
      <S.Header>
        <Button buttonType='rounded' fontWeight='700' fontSize='18' isActive={true}>
          ºC
        </Button>

        <Button buttonType='rounded' fontWeight='700' fontSize='18'>
          ºF
        </Button>
      </S.Header>

      <S.ForecastRow>
        <WeatherCard weather={weatherData.forecast.forecastday[0]}/>
        <WeatherCard weather={weatherData.forecast.forecastday[1]}/>
        <WeatherCard weather={weatherData.forecast.forecastday[2]}/>
        <WeatherCard weather={undefined} limited={true}/>
        <WeatherCard weather={undefined} limited={true}/>
      </S.ForecastRow>

      <S.Hightligths>
        <h2>Today&apos;s Highlights</h2>

        <S.HightligthsGrid>
          <S.HightlightCard>
            <span>Wind Status</span>
            <WeatherInformation title={weatherData?.current.wind_mph} subtitle='mph'/>
            <S.CardFooter>
              <S.ArrowContainer direction={weatherData.current.wind_dir}>
                <IoMdNavigate size={20}/>
              </S.ArrowContainer>
              <span>{weatherData.current.wind_dir}</span>
            </S.CardFooter>
          </S.HightlightCard>
          <S.HightlightCard>
            <span>Humidity</span>
            <WeatherInformation title={weatherData.current.humidity} subtitle='%'/>
            <ProgressBar value={weatherData.current.humidity}/>
          </S.HightlightCard>
          <S.HightlightCard>
            <span>Visibility</span>
            <WeatherInformation title={weatherData.current.vis_miles} subtitle='miles'/>
          </S.HightlightCard>
          <S.HightlightCard>
            <span>Air Pressure</span>
            <WeatherInformation title={weatherData.current.pressure_mb} subtitle='mb'/>
          </S.HightlightCard>
        </S.HightligthsGrid>
      </S.Hightligths>
    </S.Container>
  );
}

export default Forecast
