import * as S from './styles'
import Image from "next/image";

import clear from '../../assets/Clear.png' //placeholder
import { getCondition } from '../../utils/getCondition';

interface WeatherProps {
  weather?: number;
  isMainWeather: boolean;
}

const WeatherDisplay = ({weather, isMainWeather}: WeatherProps) => {
  return (
    <>
      <S.Container>
        <Image
          src={weather ? getCondition(weather) : clear}
          width={isMainWeather ? 150 : 50}
          height={isMainWeather ? 150 : 50}
          alt={'current weather'}/>
      </S.Container>
    </>
  );
}

export default WeatherDisplay;
