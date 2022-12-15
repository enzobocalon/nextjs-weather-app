import Button from '../Button';
import * as S from './styles'

import { BiTargetLock } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md'
import { VscCircleFilled } from 'react-icons/vsc'

import WeatherDisplay from '../WeatherDisplay';
import WeatherInformation from '../WeatherInformation';

const Sidebar = () => {
  return (
    <S.Container>
      <S.TopContent>

        <Button buttonType='normal'>
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
        <WeatherInformation title='15' subtitle='ºC'/>
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
  );
}

export default Sidebar;
