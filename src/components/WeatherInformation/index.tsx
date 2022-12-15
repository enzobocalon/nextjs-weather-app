import * as S from './styles';

interface WIProps {
  title: string;
  subtitle: string;
}

const WeatherInformation = ({title, subtitle}: WIProps) => {
  return (
    <S.InfoContainer>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.InfoContainer>
  );
}

export default WeatherInformation
