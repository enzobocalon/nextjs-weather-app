import Image from 'next/image';
import * as S from './styles'

import snow from '../../assets/Snow.png'

const WeatherCard = () => {
  return (
    <S.Container>
      <p>Tomorrow</p>
      <Image src={snow.src} width={65} height={65} alt='weather'/>
      <div>
        <span>16ºC</span>
        <span>18 ºC</span>
      </div>
    </S.Container>
  );
}

export default WeatherCard
