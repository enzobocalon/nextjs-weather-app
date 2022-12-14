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
  background-image: url(${cloudsBG.src});
  width: 100%;
`;
