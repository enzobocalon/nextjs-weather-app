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
`;

export const MiddleContent = styled.div`
  width: 100%;
  height: 40vh;

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
    height: 40vh;

    opacity: .5;
  }

`;
