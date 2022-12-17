import styled from "styled-components"

interface Props {
  buttonType: 'normal' | 'rounded';
  isActive?: boolean;
  children: React.ReactNode;
  customBackground?: string;
  fontWeight?: string;
  fontSize?: string;

}


export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  box-shadow: ${props => props.customBackground ? '' : '0px 4px 4px rgba(0, 0, 0, 0.25);'};
  font-weight: ${props => props.fontWeight ? props.fontWeight : '500'};
  font-family: 'Raleway', sans-serif;
  font-size: ${props => props.fontSize ? `${props.fontSize}px` : '16px'};
  padding: ${props => props.buttonType === 'rounded' ? '' : '10px 18px'};
  border-radius: ${props => props.buttonType === 'rounded' ? '50%' : ''};
  width: ${props => props.buttonType === 'rounded' ? '40px' : 'auto'};
  height: ${props => props.buttonType === 'rounded' ? '40px' : '50px'};
  background-color: ${props => props.customBackground ? props.customBackground : props.isActive ? '#E7E7EB' : '#6E707A'};
  color: ${props => props.isActive ? '#110E3C' : '#E7E7EB;'};
  cursor: pointer;
  transition: all .3s ease;

  & > svg {
    flex: 1;
  }
`;
