import styled from "styled-components";

export const Container = styled.div`
  padding: 1.125rem 1.25rem;
  background-color: #1E213A;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 10px;
  }

  div:last-of-type {
    margin-top: 2rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

export const LimitedContainer = styled.div`
  padding: 1.125rem 1.25rem;
  background-color: #1E213A;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
