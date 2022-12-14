import styled from "styled-components"

interface Props {
  buttonType: 'normal' | 'rounded';
  isActive?: boolean;
  children: React.ReactNode;
  customBackground?: string;
}


export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: ${props => props.buttonType === 'rounded' ? '' : '10px 18px'};
  border-radius: ${props => props.buttonType === 'rounded' ? '50%' : ''};
  width: ${props => props.buttonType === 'rounded' ? '40px' : 'auto'};
  height: ${props => props.buttonType === 'rounded' ? '40px' : 'auto'};
  background-color: ${props => props.customBackground ? props.customBackground : props.isActive ? '#E7E7EB' : '#6E707A'};
  color: ${props => props.isActive ? '#110E3C' : '#E7E7EB;'};
  cursor: pointer;

  & > svg {
    flex: 1;
  }
`;
