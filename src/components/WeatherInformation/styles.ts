import styled from "styled-components";

interface Props {
  isMainContent?: boolean;
}

export const InfoContainer = styled.div`

`;

export const Title = styled.span<Props>`
  font-size: ${props => props.isMainContent ? '9rem' : '4rem'};
  font-weight: 600;
  color: #E7E7EB;
`;

export const Subtitle = styled.span<Props>`
  font-size: ${props => props.isMainContent ? '4rem' : '2rem'};
  font-weight: 500;
  color: #A09FB1;
`;
