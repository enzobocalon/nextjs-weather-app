import * as S from './styles'
import Image from "next/image";

import clear from '../../assets/Clear.png'

interface WeatherProps {
  weather?: string;
  isMainWeather: boolean;
}

const WeatherDisplay = ({weather, isMainWeather}: WeatherProps) => {
  return (
    <>
      <S.Container>
        <Image src={clear} width={isMainWeather ? 180 : 50} height={isMainWeather ? 180 : 50} alt={'current weather'}/>
      </S.Container>
    </>
  );
}

export default WeatherDisplay;
