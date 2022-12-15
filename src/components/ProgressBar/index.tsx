import * as S from './styles'

const ProgressBar = () => {
  return (
    <S.Container>
      <S.TopLabel>
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </S.TopLabel>

      <S.ProgressBG>
        <S.Progress />
      </S.ProgressBG>
      
      <S.BottomLabel>
        <span>%</span>
      </S.BottomLabel>
    </S.Container>
  );
}

export default ProgressBar;
