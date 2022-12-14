import * as S from './styles'

interface ButtonProps {
  buttonType: 'normal' | 'rounded';
  isActive?: boolean;
  customBackground?: string;
  children: React.ReactNode;
}

const Button = ({buttonType, isActive, customBackground, children}: ButtonProps) => {
  return (
    <S.Button buttonType={buttonType} isActive={isActive} customBackground={customBackground}>
      {children}
    </S.Button>
  )
}

export default Button;
