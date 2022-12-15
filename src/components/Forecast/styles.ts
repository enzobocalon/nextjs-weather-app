import styled from "styled-components";

export const Container = styled.section`
  padding: 2rem;
  padding-left: 9.5rem;
  padding-right: 7.8125rem;
  width: calc(100% - 459px);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 72px;

  @media (max-width: 1439px) {
    padding: 2rem;
  }

  @media (max-width: 850px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: .75rem;

  /* Doesn't exist on mobile?! */
`;

export const ForecastRow = styled.div`
  display: grid;
  grid-gap: 26px;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
`;

export const Hightligths = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

export const HightligthsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(46%, 1fr));
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 3rem;
  height: 100%;
  width: 100%;
`;

export const HightlightCard = styled.div`
  background-color: #1E213A;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 160px;
  padding-block: 24px;
  gap: 18px;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  span {
    font-size: 14px;
  }
`;

export const ArrowContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  svg {
    transform: rotate(-150deg);
  }
`;
