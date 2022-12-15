import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;
