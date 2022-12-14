import styled from "styled-components";

import cloudsBG from '../../assets/Cloud-background.png';

import {motion} from 'framer-motion';

export const Container = styled(motion.div)`
  background-color: #1E213A;
  min-height: 100%;

  @media (max-width: 850px) {
    min-height: 100vh;
  }
`;

export const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.625rem 2.875rem;

  @media (max-width: 850px) {
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
    max-width: 459px;
    height: 30vh;

    opacity: .3;

    @media (max-width: 850px) {
      max-width: 100%;
      background-size: 550px;
      background-position: 50% 100%;
    }
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

  @media (max-height: 900px) {
    padding: 0;
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

