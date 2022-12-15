import * as S from './styles'

import { BiTargetLock } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md'
import { VscCircleFilled } from 'react-icons/vsc'

import WeatherDisplay from '../WeatherDisplay';
import WeatherInformation from '../WeatherInformation';
import Button from '../Button';

import { useContext } from 'react';
import { SearchContext } from '../../contexts/Search';

const SidebarDisplayState = () => {
  const {setIsSearchActive} = useContext(SearchContext);

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
        <WeatherDisplay isMainWeather={true}/>
      </S.MiddleContent>

      <S.LowerMiddleContent>
        <WeatherInformation title='15' subtitle='ºC' isMainContent={true}/>
        <h2>Shower</h2>
      </S.LowerMiddleContent>

      <S.Footer>
        <S.FooterContent>
          <span>Today</span>
          <VscCircleFilled size={8} color={'#88869D'}/>
          <span>Fri, 5 Jun</span>
        </S.FooterContent>

        <S.FooterContent>
          <MdLocationOn color={'#88869D'}/>
          <span>Helsinki</span>
        </S.FooterContent>
      </S.Footer>
    </S.Container>
  )
}

export default SidebarDisplayState
