import Button from '../Button';
import WeatherCard from '../WeatherCard';
import * as S from './styles'

const Forecast = () => {
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
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
      </S.ForecastRow>
    </S.Container>
  );
}

export default Forecast
