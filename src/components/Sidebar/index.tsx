import Button from '../Button';
import * as S from './styles'

import { BiTargetLock } from 'react-icons/bi';
import WeatherDisplay from '../WeatherDisplay';

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
    </S.Container>
  );
}

export default Sidebar;
