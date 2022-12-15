import styled from "styled-components";

import cloudsBG from '../../assets/Cloud-background.png';

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  max-width: 475px;
  background-color: #1E213A;
`;

export const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.625rem 2.875rem;

  @media (max-width: 350px) {
    padding: 2rem;
  }
`;

export const MiddleContent = styled.div`
  width: 100%;
  height: 30vh;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  &::before {
    content: '';
    position: absolute;
    background-image: url(${cloudsBG.src});
    background-repeat: no-repeat;
    background-position: center 100%;

    background-size: 150%;

    top: 0;
    left: 0;
    width: 100%;
    max-width: 475px;
    height: 30vh;

    opacity: .3;
  }

`;

export const LowerMiddleContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2.625rem 5.4375rem;
  gap: 87px;

  h2 {
    color: #A09FB1;
    font-size: 2.25rem;
    font-weight: 600;
  }
`;

export const Footer = styled.div`
  padding: 2.625rem 5.4375rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 350px) {
    padding: 2rem;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  span {
    color: #88869D;
  }
`;
