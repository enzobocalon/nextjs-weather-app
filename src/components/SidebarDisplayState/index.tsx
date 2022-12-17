import * as S from './styles'

import { BiTargetLock } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md'
import { VscCircleFilled } from 'react-icons/vsc'

import WeatherDisplay from '../WeatherDisplay';
import WeatherInformation from '../WeatherInformation';
import Button from '../Button';

import { useContext } from 'react';
import { SearchContext } from '../../contexts/Search';
import { WeatherContext } from '../../contexts/Weather';
import { formatDate } from '../../utils/formatDate';

const SidebarDisplayState = () => {
  const {setIsSearchActive} = useContext(SearchContext);
  const { celsius, weatherData } = useContext(WeatherContext);

  if (!weatherData) {
    return null;
  }

  return (
    <S.Container animate={{x: 0}} initial={{x: '-100%'}} transition={{ease: "linear", duration: .3}}>
      <S.TopContent>
        <Button buttonType='normal' onClick={() => setIsSearchActive(true)}>
          Search for places
        </Button>

        <Button buttonType='rounded'>
          <BiTargetLock color='#E7E7EB' size={24}/>
        </Button>
      </S.TopContent>

      <S.MiddleContent>
        <WeatherDisplay weather={weatherData.current.condition.code} isMainWeather={true}/>
      </S.MiddleContent>

      <S.LowerMiddleContent>
        <WeatherInformation title={celsius ? weatherData.current.temp_c : weatherData.current.temp_f} subtitle={celsius ? 'ºC' : 'ºF'} isMainContent={true}/>
        <h2>{weatherData.current.condition.text}</h2>
      </S.LowerMiddleContent>

      <S.Footer>
        <S.FooterContent>
          <span>Today</span>
          <VscCircleFilled size={8} color={'#88869D'}/>
          <span>{formatDate(weatherData.location.localtime)}</span>
        </S.FooterContent>

        <S.FooterContent>
          <MdLocationOn color={'#88869D'}/>
          <span>{weatherData.location.name}</span>
        </S.FooterContent>
      </S.Footer>
    </S.Container>
  )
}

export default SidebarDisplayState
