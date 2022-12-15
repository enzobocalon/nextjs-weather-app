import * as S from './styles';

interface WIProps {
  title: string;
  subtitle: string;
  isMainContent?: boolean;
}

const WeatherInformation = ({title, subtitle, isMainContent = false}: WIProps) => {
  return (
    <S.InfoContainer>
      <S.Title isMainContent={isMainContent}>{title}</S.Title>
      <S.Subtitle isMainContent={isMainContent}>{subtitle}</S.Subtitle>
    </S.InfoContainer>
  );
}

export default WeatherInformation
