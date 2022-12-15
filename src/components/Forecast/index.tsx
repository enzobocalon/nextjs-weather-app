import Button from '../Button';
import WeatherCard from '../WeatherCard';
import WeatherInformation from '../WeatherInformation';
import { IoMdNavigate } from 'react-icons/io'
import * as S from './styles'
import ProgressBar from '../ProgressBar';

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

      <S.Hightligths>
        <h2>Today&apos;s Highlights</h2>

        <S.HightligthsGrid>
          <S.HightlightCard>
            <span>Wind Status</span>
            <WeatherInformation title='7' subtitle='mph'/>
            <S.CardFooter>
              <S.ArrowContainer>
                <IoMdNavigate size={20}/>
              </S.ArrowContainer>
              <span>WSW</span>
            </S.CardFooter>
          </S.HightlightCard>
          <S.HightlightCard>
            <span>Humidity</span>
            <WeatherInformation title='84' subtitle='%'/>
            <ProgressBar />
          </S.HightlightCard>
          <S.HightlightCard>
            <span>Visibility</span>
            <WeatherInformation title='6,4' subtitle='miles'/>
          </S.HightlightCard>
          <S.HightlightCard>
            <span>Air Pressure</span>
            <WeatherInformation title='998' subtitle='mb'/>
          </S.HightlightCard>
        </S.HightligthsGrid>
      </S.Hightligths>
    </S.Container>
  );
}

export default Forecast
