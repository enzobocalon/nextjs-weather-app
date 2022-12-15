import styled from "styled-components";

export const Container = styled.section`
  padding: 2rem 9.625rem;
  width: calc(100% - 459px);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: .75rem;

  /* Doesn't exist on mobile?! */
`;

export const ForecastRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 26px;

  margin-top: 66px;
`;
